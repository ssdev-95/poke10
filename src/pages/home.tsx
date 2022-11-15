import { Header } from '../components/header'

import ArrowDown from '../assets/arrow_down.svg'
import Poke10Logo from '../assets/logo.svg'
import {PokemonCard} from '../components/pokemon_card'

export function Home() {
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

			<div>
			  <PokemonCard />
			</div>
		</div>
	)
}
