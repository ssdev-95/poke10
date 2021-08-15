import { ReactNode } from 'react';

interface IProvider {
    children: ReactNode;
}

interface IPokemonData {
    dex: IPokemon[];
    getPokemonData: (name: string)=>Promise<IPokemon>;
}

interface IPokemon {
    id: number,
    name: string,
    stats: {
        attack: number
        defense: number
        hp: number
        special_attack: number
        special_defense: number
        speed: number
    },
    sprites: {
        normal: string,
        shiny: string
    },
    height: number,
    weight: number,
    types: string[],
    flavor_text: string
};

interface ICard {
    pokemon:IPokemon;
}

export { IProvider, IPokemonData, IPokemon, ICard };