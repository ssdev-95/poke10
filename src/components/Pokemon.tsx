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

export const getPokemon = (query: string) => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${query}`

    fetch(pokeUrl)
                .then(res => res.json())
                .then(data => {
                    let pokemon = data.results
                    console.log(pokemon)
                    return pokemon
                })
                .catch(error => console.log(error.message))
    
    console.log(query)
}