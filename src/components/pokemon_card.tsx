import { PokemonType } from '../@types'

export type PokemonCardType = Pick<PokemonType, 'id'|'name'|'sprites'|'types'>

type PokemonCardProps = {
  pokemon: PokemonCardType
}


export function PokemonCard({ pokemon }:PokemonCardProps) {
  const poketype = pokemon.types[0]

  return (
	  <div
		  className={[
			  'h-[12.5rem] w-[12rem] p-0 mx-auto rounded-md grid bg-white',
				`ring-[2px] ring-${poketype}`
			].join(' ')}
		>
		  <header className="w-full text-right p-2">
			  <span
				  className={`text-${poketype}`}
				>
				  # {pokemon.id.toString().padStart(3, '0')}
				</span>
			</header>

		  <div className="h-[60%] w-full flex items-center justify-center bg-[#f00]">
  			<img
			    src={pokemon.sprites.home_default}
		  		className="h-full mx-auto"
	  			alt={pokemon.name}
  			/>
			</div>

			<footer className={[
			  'w-full h-fit p-2 text-center mt-0',
				`bg-${poketype}`
			].join(' ')}>
			  <span className="text-white">
				  {pokemon.name}
				</span>
			</footer>
		</div>
	)
}
