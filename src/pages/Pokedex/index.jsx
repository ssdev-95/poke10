/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePokedex } from 'src/contexts/Pokemon';

import { PokedexContainer } from 'src/components/PokedexContainer';
import { SearchBar } from 'src/components/SearchBar';
import { PokeSpinner } from 'src/components/PokeSpinner';
import { Modal } from 'src/components/PokeModal';

import { useStyles } from 'src/styles/pokepage.styles';
import LogoIcon from 'src/icons/logo.svg';

const limit = Number(process.env.REACT_APP_STD_QUERY_LIMIT);

function Pokedex() {
  const { Dex } = useStyles();
  const { getPokemons, dex, isModalOpen } = usePokedex();
  const { search } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const query = Number(search.replace('?limit=',''))|| limit;
    getPokemons(0, query);
  }, []);

  useEffect(()=>{
    dex && setTimeout(()=>setLoading(dex.length>0), 1000);
  }, [dex]);

  return (<>
    { isModalOpen && (<Modal />) }
    <main className={Dex}>
      <header>
        <img src={LogoIcon} alt="Poke10" />
      </header>
      <div>
        <SearchBar />
        { loading ? (<PokeSpinner />):(<PokedexContainer />) }
      </div>
    </main>
  </>);
}

export default Pokedex;
