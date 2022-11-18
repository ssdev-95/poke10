import { Link} from 'react-router-dom'

import { classes } from '../styles/card-classes'

type PokemonCardProps = {
  id: number
	name: string
	types: string[]
	sprites: {
	  home_default: string
	}
}

export function PokemonCard({
  id, name, sprites, types
}:PokemonCardProps) {

  const ringClass = `ring-[2px] ring-${types[0]}`
	const footerClass = `bg-${types[0]}`

	const headerClass = `text-${types[0]} font-semibold`

  return (
	  <Link to={`/pokemon/${id}`}>
	  <div
		  role="card"
			className={`w-[11rem] min-h-[12rem] overflow-hidden rounded-sm ${ringClass}`}
		>
		  <header className="p-2 text-right">
			  <span className={classes.bug.txt}>
				  # {id.toString().padStart(3, '0')}
				</span>
			</header>

		  <div className="h-[70%]">
  			<img
			    src={sprites.home_default}
		  		className="w-full h-auto mx-auto"
	  			alt={name}
  			/>
			</div>

			<footer className={`p-2 text-center ${footerClass}`}>
			  <span className="text-white">
				  {name}
				</span>
			</footer>
		</div>
		</Link>
	)
}
