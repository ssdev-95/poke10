import { ICard } from 'src/@types';

const PokemonCard = ({pokemon}: ICard) => {

    return (
        <div>{JSON.stringify(pokemon)}</div>
    );
}

export { PokemonCard };