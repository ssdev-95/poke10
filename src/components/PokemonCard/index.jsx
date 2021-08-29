import { Card as PokeCard } from'@material-ui/core';
import { useStyles } from 'src/styles/pokecard.styles';
import colors from 'src/styles/colors.json';

const PokemonCard = ({pokemon, handle}) => {
    const { Card } = useStyles();

    const {
        id,
        name,
        sprites,
        types
    } = pokemon;
    const color = colors[types[0]];

    

    return (
        <PokeCard
          className={Card}
          onClick={handle}
          style={{backgroundColor: color}}
        >
            <p>{`${id}. ${name}`}</p>
            <img src={sprites['normal']} alt={`${id}-${name}`} />
            <span>{types.join(' / ')}</span>
        </PokeCard>
    );
}

export { PokemonCard };