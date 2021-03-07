export default function Pokemon(pokename) {
    const Pokedex = require('pokeapi-js-wrapper')
    const dex = new Pokedex.Pokedex()

    const pokemon = dex.getPokemonByName(pokename)
                       .then(response => {
                           console.log(response)
                       })
    
    return (pokemon)
}