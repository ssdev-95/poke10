/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePokedex } from 'src/contexts/Pokemon';

import { PokedexContainer } from 'src/components/PokedexContainer';
import { SearchBar } from 'src/components/SearchBar';

import { useStyles } from 'src/styles/pokepage.styles';
import LogoIcon from 'src/icons/logo.svg';

const limit = Number(process.env.REACT_APP_STD_QUERY_LIMIT);

function Pokedex() {
  const { Dex } = useStyles();
  const { getPokemons } = usePokedex();
  const { search } = useLocation();

  useEffect(()=>{
    const query = Number(search.replace('?limit=',''))|| limit;
    getPokemons(0, query);
    // console.log(query);
  }, [])

  return (
    <main className={Dex}>
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

export default Pokedex;
