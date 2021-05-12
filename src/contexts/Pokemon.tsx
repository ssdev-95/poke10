import { createContext, useContext, useEffect, useState } from 'react'

import { PokemonContextData, PokemonProviderProps, PokemonData } from '@/types'

const Pokemon = createContext({} as PokemonContextData)

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
    const boilerPoke = {
    id: 0,
    name: '',
    types: [''],
    height: 0,
    weight: 0,
    stats: [{
      stat: '',
      baseStat: 0,
    }],
    sprites: {
      normal: '',
      shiny: '',
    },
    dex_entry: ''
  }
    const [pokemons, setPokemons] = useState<PokemonData[]>([boilerPoke])

    const returnPokemons = (pokes:PokemonData[]) => {
        setPokemons(pokes)
    }

    return (
        <Pokemon.Provider value={{
            returnPokemons,
            pokemons
        }}>
            {children}
        </Pokemon.Provider>
    )
}

export const usePokemon = () => {
    return useContext(Pokemon)
}
