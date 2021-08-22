import { usePokedex } from 'src/contexts/Pokemon';
import { PokemonCard } from 'src/components/PokemonCard';

import { useStyles } from 'src/styles/pokedex.container';

const PokedexContainer = () => {
    const { Container } = useStyles();
    const { dex } = usePokedex();

    return (
        <div className={Container}>
          { 
            dex && dex?.map(poke=>(<PokemonCard pokemon={poke} key={`${poke['name']}`} />)) 
          }
        </div>
    );
}

export { PokedexContainer };