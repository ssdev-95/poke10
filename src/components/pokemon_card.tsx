import { PokemonType } from '../@types'

export type PokemonCardType = Pick<PokemonType, 'id'|'name'|'sprites'|'types'>

type PokemonCardProps = {
  pokemon: PokemonCardType
}


export function PokemonCard({ pokemon }:PokemonCardProps) {
	const textColor = `text-poketype-${pokemon.types[0]}`
	const borderColor = `border-poketype-${pokemon.types[0]}`
	const bgColor = `bg-poketype-${pokemon.types[0]}`

  return (
	  <div
		  className={[
			  'h-[12rem] w-[12rem] ring-0 p-0 mx-auto border rounded-md flex flex-col overflow-hidden',
				borderColor
			].join(' ')}
		>
		  <header className="w-full flex justify-end p-2">
			  <span className={textColor}>
				  # {pokemon.id.toString().padStart(3, '0')}
				</span>
			</header>

		  <img
			  src={pokemon.sprites.official_artwork}
				className="flex-1 auto fit-cover mx-auto"
				alt={pokemon.name}
			/>

			<footer className={[
			  'w-full p-2 text-center',
				bgColor
			].join(' ')}>
			  <span className="text-white">
				  {pokemon.name}
				</span>
			</footer>
		</div>
	)
}
