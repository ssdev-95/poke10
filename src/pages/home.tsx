import { useQuery } from '@tanstack/react-query'

import { Header } from '../components/header'
import { Loader } from '../components/loader'
import { PokemonCard } from '../components/pokemon_card'

import ArrowDown from '../assets/arrow_down.svg'
import Poke10Logo from '../assets/logo.svg'

import { fetchPokemonList } from '../services/fetch_pokemons'

export function Home() {
	const { isLoading, data } = useQuery({
  	queryKey: ['pokemons'],
	  queryFn: () => fetchPokemonList(),
		staleTime: 20000
	})

  return (
	  <div className="min-h-screen w-screen max-w-[50rem] mx-auto px-4 py-6">
		  <Header>
			  <img src={Poke10Logo} alt="Poke10" />

				<span className="flex gap-1">
				  #
					<img src={ArrowDown} alt="A simple arrow down" />
				</span>
			</Header>

			<label>
			  <input
				  placeholder="&#128269; Search"
					className="text-gray-800 text-center w-full p-2 rounded my-6 outline-0 focus:ring-1 focus:ring-gray-800"
				/>
			</label>

			<div className="flex gap-4 flex-wrap min-h-full">
			  {isLoading ? <Loader/> : data?.pokemons.map(pokemon => (
				  <PokemonCard
					  key={pokemon.id}
						{...pokemon}
					/>
				))}
			</div>
		</div>
	)
}
