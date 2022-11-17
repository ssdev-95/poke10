import { api } from './api'
import { PokemonResponse, PokemonType } from '../@types'

export async function fetchSinglePokemon(url:string):Promise<PokemonType> {
	const res = await api.get<PokemonResponse>(url)

	const {
		id, name, height, types, sprites, stats
	} = res.data

	return {
		id,
		name,
		height,
		types: types.map(
			type => type.type.name
		),
		stats: stats.map(({ stat, base_stat }) => ({
			base_stat,
			name: stat.name
		})),
		sprites: {
			official_artwork: sprites.other['official-artwork'].front_default,
			home_default: sprites.other.home?.front_default,
			home_shiny: sprites.other.home?.front_shiny,
			dream_world: sprites.other.dream_world?.front_default
		}
	}
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

	return result
}
