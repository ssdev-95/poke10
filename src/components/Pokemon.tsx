export const getPokemons = async () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100'
    
    const response = await fetch(pokeUrl)
    const data = await response.json()
    const result = data.results

    return result
}

export const getPokemonData = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getPokemon = async () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1118'
    
    const response = await fetch(pokeUrl)
    const data = await response.json()
    const result = data.results

    return result
}
