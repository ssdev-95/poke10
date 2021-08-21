import { useEffect } from 'react';
import { usePokedex } from 'src/contexts/Pokemon';
import { PokemonCard } from 'src/components/PokemonCard';

import { useStyles } from 'src/styles/pokedex.container';

const PokedexContainer = () => {
    const { Container } = useStyles();
    const { dex } = usePokedex();

    useEffect(()=>{
        console.log(dex);
    }, [dex])

    return (
        <div className={Container}>{ 
           dex.map(poke=>(<PokemonCard pokemon={poke} key={`${poke['name']}`} />)) 
        }</div>
    );
}

export { PokedexContainer };