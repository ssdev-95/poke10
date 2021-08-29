import { useState } from 'react';
import { usePokedex } from 'src/contexts/Pokemon';
import Pokeball from 'src/icons/pokeball.png';
import { useStyles } from 'src/styles/search.styles';

const SearchBar =() => {
  const { Label } = useStyles();
  const [pokename, setPokename] = useState('');

  const { toggleModal, toggleSelectedPokemon } = usePokedex();

  const handleKeyUp = (event) => {
    const value = event.currentTarget.value;

    setPokename((value.toLowerCase()).replace(' ', ''));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    toggleSelectedPokemon(pokename);

    toggleModal();

    setPokename('');
  }

    return (
        <form action="#" onSubmit={handleSubmit}>
          <label className={Label}>
            <input value={pokename} type="text" onChange={handleKeyUp} />
            <button type="submit">
              <img src={Pokeball} alt="Pokeball" />
            </button>
          </label>
        </form>
    );
}

export { SearchBar };