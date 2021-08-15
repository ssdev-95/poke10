import Pokeball from 'src/icons/pokeball.png';
import { useStyles } from 'src/styles/search.styles';

const SearchBar =() => {
  const { Label } = useStyles();

    return (
        <label className={Label}>
          <input type="text" />
          <button>
            <img src={Pokeball} alt="Pokeball" />
          </button>
        </label>
    );
}

export { SearchBar };