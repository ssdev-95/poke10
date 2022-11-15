import { api } from './api'
import { PokemonResponse } from '../@types'
import { PokemonCardType } from '../components/pokemon_card'

export async function fetchSinglePokemon(url:string):Promise<PokemonCardType> {
	const res = await api.get<PokemonResponse>(url)
	const { id, name, types, sprites } = res.data

	return { id, name, types: types.map(
		type => type.type.name
	), sprites: {
		official_artwork: sprites.other.official_artwork.front_default,
		home_default: sprites.other.home?.front_default,
		home_shiny: sprites.other.home?.front_shiny,
		dream_world: sprites.other.dream_world?.front_default
	}}
}

export async function fetchPokemonList() {
	const { data } = await api.get<{
		next: string
		prev: string | null
		results: { url: string }[]
	}>('/?offset=0&limit=30')

	const pokePromises = data.results.map(
		res => fetchSinglePokemon(res.url)
	)

	const pokemons = await Promise.all(pokePromises)

	const result = {
		next: data.next,
		prev: data.prev,
		pokemons
	}

	console.log(result)
	return result
}
