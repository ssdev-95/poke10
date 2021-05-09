import React, { useEffect } from 'react';
import { GetStaticProps } from 'next'

import { getPokemonData } from './api/Pokemon'

export default function Home({ pokedex }) {
  useEffect(()=>{
    console.log(pokedex)
  }, [])

  return (
    <div></div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  let pokedex = []

  for(let index=0; index<151; index++) {
    const pokeurl = `https://pokeapi.co/api/v2/pokemon/${index+1}`
    pokedex = [...pokedex, await getPokemonData(pokeurl)]
  }

  return {
    props: {
      pokedex
    },
    revalidate: 60*60*24
  }
}
