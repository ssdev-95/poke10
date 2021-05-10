import React, { useEffect } from 'react';
import { GetStaticProps } from 'next'

import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'

import { HomeProps } from '@/types'
import { usePokemon } from '@/contexts/Pokemon'
import { getPokemonData, getPokemons, getFlavorText } from './api/Pokemon'

import styles from '@/styles/home.module.scss'

export default function Home({ pokedex }:HomeProps) {
  const { returnPokemons } = usePokemon()

  useEffect(()=>{
    returnPokemons(pokedex)
  }, [])

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Dashboard />
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const basedex = await getPokemons(0, 151)
  const dexurls = basedex.results.map(dex=>dex.url)

  let pokelist = []

  for(let id=0; id<dexurls.length; id++) {
    const url = dexurls[id]
    const pokemon = await getPokemonData(url)
    pokelist = [...pokelist, {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map(type=>type.type.name),
      height: pokemon.height,
      weight: pokemon.weight,
      stats: pokemon.stats.map(stat=>({
        stat: stat.stat.name,
        baseStat: stat.base_stat
      })),
      sprites: {
        normal: pokemon.sprites.front_default,
        shiny: pokemon.sprites.front_shiny
      },
      dex_entry: await getFlavorText(pokemon.id)
    }]
  }

  return {
    props: {
      pokedex: pokelist
    },
    revalidate: 60*60*24
  }
}
