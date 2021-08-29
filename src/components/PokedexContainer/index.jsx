import { Box } from '@material-ui/core';
import { usePokedex } from 'src/contexts/Pokemon';
import { PokemonCard } from 'src/components/PokemonCard';

import { useStyles } from 'src/styles/pokedex.container';

const PokedexContainer = () => {
    const { Container } = useStyles();
    const { dex, toggleModal, toggleSelectedPokemon } = usePokedex();

    const handleClick = (name) => {
        toggleSelectedPokemon(name);
        toggleModal();
    }

    return (
        <Box className={Container}>
          { 
            dex && dex?.map(poke=>(
              <PokemonCard
                 pokemon={poke}
                 key={`${poke['name']}`}
                 handle={()=>handleClick(poke['name'])}
              />
            )) 
          }
        </Box>
    );
}

export { PokedexContainer };