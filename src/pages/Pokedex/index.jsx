import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { usePokedex } from 'src/contexts/Pokemon';

import { PokedexContainer } from 'src/components/PokedexContainer';
import { SearchBar } from 'src/components/SearchBar';
import { PokeSpinner } from 'src/components/PokeSpinner';
import { Modal } from 'src/components/PokeModal';

import { useStyles } from 'src/styles/pokepage.styles';

const LogoIcon = require(`../../icons/${process.env?.REACT_APP_LOGO}.svg`);
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
    <Box className={Dex}>
      <header>
        <img src={LogoIcon['default']} alt="Poke10" />
      </header>
      <div>
        <SearchBar />
        { loading ? (<PokeSpinner />):(<PokedexContainer />) }
      </div>
    </Box>
  </>);
}

export default Pokedex;
