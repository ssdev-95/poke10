import { useParams } from 'react-router-dom'

export function Pokemon() {
  const { id } = useParams<'id'>()

  return (
	  <div>
		  <h1>Pokemon: {id}</h1>
		</div>
	)
}
