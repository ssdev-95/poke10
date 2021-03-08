import { PokemonDetailsContextProvider } from '../contexts/PokemonDetailsModalContext';
import { SearchbarContextProvider } from '../contexts/SearchbarContext';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
      <PokemonDetailsContextProvider>
        <SearchbarContextProvider>
        <Component {...pageProps} />
        </SearchbarContextProvider>
      </ PokemonDetailsContextProvider>
  )
}

export default MyApp
