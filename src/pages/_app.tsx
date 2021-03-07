import { PokemonDetailsContextProvider } from '../contexts/PokemonDetailsModalContext';
import { SearchbarContextProvider } from '../contexts/SearchbarContext';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <SearchbarContextProvider>
      <PokemonDetailsContextProvider>
        <Component {...pageProps} />
      </PokemonDetailsContextProvider>
    </SearchbarContextProvider>
  )
}

export default MyApp
