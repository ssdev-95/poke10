import { api } from './api'
import { PokemonResponse, FlavorTextResponse, PokemonType } from '../@types'

async function fetchPokemonFlavorText(id:number) {
	const url = `/pokemon-species/${id}`
	const { data } = await api.get<FlavorTextResponse>(url)

	return (data.flavor_text_entries.find(
		entry => entry.language.name === 'en'
	)?.flavor_text ?? '')
	  .replaceAll('\n', ' ')
		.replaceAll('\f', ' ')
}

export async function fetchSinglePokemon(url:string):Promise<PokemonType> {
	const res = await api.get<PokemonResponse>(url)

	const {
		id, name, height, types, sprites, stats
	} = res.data

	const flavorText = await fetchPokemonFlavorText(id)

	return {
		id,
		name,
		height,
		flavorText,
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
	}>('/pokemon/?offset=0&limit=30')

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
