/*import { useContext } from 'react';
import { SearchbarContext } from '../contexts/SearchbarContext';

export const Pokemon = () => {
    const { query } = useContext(SearchbarContext)

    const Pokedex = require('pokeapi-js-wrapper')
    const customParams = {
        protocol: 'https',
        hostname: 'localHost:3000',
        versionPath: '/api/v2',
        cache: true,
        timeout: 5*1000,
        cacheImages: true
    }
    const dex = new Pokedex.Pokedex(customParams)

    const pokemon = dex.getPokemonByName(query)
                       .then(response => {
                           console.log(response)
                       })
    
    return (pokemon)
}*/

const getPokemonData = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()

    return {
        id: data.id,
        name: data.name,
        types: data.types,
        sprites: data.sprites
    }
}

export const getPokemon = async (query: string) => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1118'
    
    const response = await fetch(pokeUrl)
    const data = await response.json()
    const result = data.results

    return result.map(pokemon=>{
        pokemon.name===query && (getPokemonData(pokemon.url))
    })
}
