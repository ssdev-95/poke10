import { ReactNode } from 'react'

export interface PokemonData {
    id: number;
    name: string;
    types: string[];
    height: number;
    weight: number;
    stats: {
      stat: string;
      baseStat: number;
    };
    sprites: {
      normal: string;
      shiny: string;
    };
    dex_entry: string;
  }

export interface PokemonContextData {
    pokemons: PokemonData[];
    returnPokemons: (pokes:PokemonData[])=>void;
}

export interface PokemonProviderProps {
    children: ReactNode;
}

export interface HomeProps {
    pokedex: PokemonData[];
}

export interface CardProps {
  pokemon: PokemonData;
  id: number;
}

export interface PokemonDetailsProps {
  pokemon: PokemonData;
}
