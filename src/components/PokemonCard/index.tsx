import { ICard } from 'src/@types';
import { useStyles } from 'src/styles/pokecard.styles';

const PokemonCard = ({pokemon}: ICard) => {
    const { Card } = useStyles();

    return (
        <div className={Card}>
            <img src={pokemon.sprites['normal']} alt={`${pokemon['name']}`} />
        </div>
    );
}

export { PokemonCard };