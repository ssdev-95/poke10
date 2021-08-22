import { useStyles } from 'src/styles/pokecard.styles';
import colors from 'src/styles/colors.json';

const PokemonCard = ({pokemon}) => {
    const { Card } = useStyles();

    const {  id, name, sprites, types } = pokemon;
    const color = colors[types[0]];

    return (
        <div className={Card} style={{backgroundColor: color}}>
            <img src={sprites['normal']} alt={`${id}-${name}`} />
        </div>
    );
}

export { PokemonCard };