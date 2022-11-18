import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Loader } from '../components/loader'

import { fetchSinglePokemon } from '../services/fetch_pokemons'
import { PokemonType } from '../@types'
import {classes} from '../styles/card-classes'

export function Pokemon() {
  const { id } = useParams<'id'>()
	const [pokemon, setPokemon] = useState<PokemonType>({} as PokemonType)

	const bgType = useMemo(() => {
	  if(!Object.values(pokemon).length) return '';

	  const poketype = pokemon.types[0]
	  return classes[poketype].bg
	}, [pokemon])

	useEffect(() => {
	  const url = `/pokemon/${id}`
		fetchSinglePokemon(url).then(setPokemon)
	},[id])

	if(!Object.values(pokemon).length) {
	  return (
  		<div className="w-screen min-h-screen flex">
  		  <Loader />
  		</div>
		)
	}

  return (
	  <div className={[
		  'w-screen min-h-screen flex',
			bgType
		].join(' ')}>
		  <h1>Pokemon: {pokemon.flavorText}</h1>
		</div>
	)
}
