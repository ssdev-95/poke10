import PokeballImg from '../assets/pokeball.svg'

export function Loader() {
  return (
	  <div className="flex-1 min-h-full flex items-center justify-center pt-24">
		  <div className="h-16 w-16 p-1">
  		  <img
			    className="h-full w-full animate-spin"
		  	  src={PokeballImg}
	  			alt="A simple pokeblal vector"
  			/>
			</div>
		</div>
	)
}
