import axios from 'axios'

export const TypeColors = [
    {"name":"bug", "color":"#A8B820"},

    {"name":"dark", "color":"#705848"},

    {"name":"dragon", "color":"#7038F8"},

    {"name":"electric", "color":"#F8D030"},

    {"name":"fairy", "color":"#EE99AC"},

    {"name":"fire", "color":"#F08030"},

    {"name":"fighting", "color":"#C03028"},

    {"name":"flying", "color":"#A890F0"},

    {"name":"ghost", "color":"#705898"},

    {"name":"grass", "color":"#78C850"},

    {"name":"ground", "color":"#E0C068"},

    {"name":"ice", "color":"#98D8D8"},

    {"name":"normal", "color":"#A8A878"},

    {"name":"poison", "color":"#A040A0"},

    {"name":"psychic", "color":"#F85888"},

    {"name":"rock", "color":"#B8A038"},

    {"name":"steel", "color":"#B8B8D0"},

    {"name":"water", "color":"#6890F0"}
]

export const getPokemons = async (offset:number, limit:number) => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    
    const response = await axios.get(pokeUrl)
    const datas = await response.data

    return datas
}

export const getPokemonData = async (url: string) => {
    const res = await axios.get(url)
    const ponse = await res.data

    return ponse
}

export const getFlavorText = async (_id: number) => {
    const flavorUrl = `https://pokeapi.co/api/v2/pokedex/1/`
    const response = await fetch(flavorUrl)
    const data = await response.json()
    const mon_data = await (await fetch(data.pokemon_entries[(_id-1)].pokemon_species.url)).json()
    const text = mon_data.flavor_text_entries
    let enTexts = text.map(tex=>tex.language.name=='en'&&tex.flavor_text)
    return enTexts[enTexts.length-1]
}

export const getPokemon = async () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1118'
    
    const res = await axios.get(pokeUrl)
    const ponse = await res.data

    return ponse
}
