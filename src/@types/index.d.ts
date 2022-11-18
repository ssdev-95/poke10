export interface FlavorTextResponse {
	flavor_text_entries: {
		flavor_text: string
		language: {
			name: string
		}
	}[]
}

export interface PokemonResponse {
  id: number
	name: string
	height: number
	stats: {
	  base_stat: number
		stat: {
		  name: string
		}
	}[]
	types: {
	  type: {
		  name: string
		}
	}[]
	sprites: {
	  other: {
		  dream_world: {
			  front_default: string
			}
			home: {
			  front_default: string
				front_shiny: string
			}
			'official-artwork': {
			  front_default: string
			}
		}
	}
}

export type PokemonType = Pick<PokemonResponse, 'id'|'name'|'height'> & {
	flavorText: string

	types: string[]

	sprites: {
		official_artwork: string
		home_default: string
		home_shiny: string
		dream_world: string
	}

	stats: {
		name: string
		base_stat: number
	}[]
}
