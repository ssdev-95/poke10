import { PokedexContainer } from 'src/components/PokedexContainer';
import { SearchBar } from 'src/components/SearchBar';

import { useStyles } from 'src/styles/app.styles';
import LogoIcon from 'src/icons/logo.svg';

function App() {
  const { App } = useStyles();
  return (
    <main className={App}>
      <header>
        <img src={LogoIcon} alt="Poke10" />
      </header>
      <div>
        <SearchBar />
        <PokedexContainer />
      </div>
    </main>
  );
}

export default App;
