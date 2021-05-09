import React, { useEffect } from 'react';
import { GetStaticProps } from 'next'

import { getPokemonData, getPokemons } from './api/Pokemon'

import cookie from 'cookie'

export default function Home({ pokedex }) {

  return (
    <div>
      {
        pokedex.map(pke=>(<div key={pke.id}>
          <span>{pke.id}</span>
          <span>{pke.name}</span>
          <span>{pke.types}</span>
        </div>)
      )}
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const basedex = await getPokemons(0, 151)
  const dexurls = basedex.results.map(dex=>dex.url)

  let pokelist = []

  for(let id=0; id<10; id++) {
    const url = dexurls[id]
    const pokemon = await getPokemonData(url)
    pokelist = [...pokelist, pokemon]
  }

  console.log(pokelist)

  return {
    props: {
      pokedex: pokelist
    },
    revalidate: 60*60*24
  }
}
