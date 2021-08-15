import { usePokemon } from 'src/contexts/Pokemon';
import { PokemonCard } from 'src/components/PokemonCard';

const PokedexContainer = () => {
    const { dex } = usePokemon();

    return (
        <div>
            { dex.map((poke)=>(
              <PokemonCard pokemon={poke} key={`${poke['name']}`} />
            )) }
        </div>
    );
}

export { PokedexContainer };