import { useState, ChangeEvent, FormEvent } from 'react';
import Pokeball from 'src/icons/pokeball.png';
import { useStyles } from 'src/styles/search.styles';

const SearchBar =() => {
  const { Label } = useStyles();
  const [pokename, setPokename] = useState('');

  const handleKeyUp = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setPokename((value.toLowerCase()).replace(' ', ''));
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    if(pokename.trim()!=='') {
      console.log(pokename);
    }

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