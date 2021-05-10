import '../styles/globals.scss'

import { PokemonProvider } from '@/contexts/Pokemon'
 
function MyApp({ Component, pageProps }) {
  return(
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  )
}

export default MyApp
