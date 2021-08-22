import { useStyles } from 'src/styles/pokecard.styles';

const PokemonCard = ({pokemon}) => {
    const { Card } = useStyles();

    return (
        <div className={Card}>
            <img src={pokemon.sprites['normal']} alt={`${pokemon['name']}`} />
        </div>
    );
}

export { PokemonCard };