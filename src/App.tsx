import {
  Route,
	Routes,
  BrowserRouter
} from 'react-router-dom'

import { Home } from './pages/home'
import { Pokemon } from './pages/pokemon'

export function App() {
  return (
	  <BrowserRouter>
			<Routes>
			  <Route
				  path="/"
					element={<Home />}
				/>

				<Route
				  path="/pokemon/:id"
					element={<Pokemon />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
