export function PokemonCard() {
  const poketype = 'fire'

	const textColor = `text-poketype-${poketype}`
	const borderColor = `border-poketype-${poketype}`
	const bgColor = `bg-poketype-${poketype}`

  return (
	  <div
		  className={[
			  'h-[12.5rem] w-[12.5rem] ring-0 p-0 mx-auto border rounded-md flex flex-col overflow-hidden',
				borderColor
			].join(' ')}
		>
		  <header className="w-full flex justify-end p-2">
			  <span className={textColor}># 003</span>
			</header>

		  <img
			  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/3.png"
				className="flex-1 auto fit-cover mx-auto"
				alt="Bulbasaur"
			/>

			<footer className={[
			  'w-full p-2 text-center',
				bgColor
			].join(' ')}>
			  <span className="text-white">
				  charmander
				</span>
			</footer>
		</div>
	)
}
