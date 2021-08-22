import Pokeball from 'src/icons/pokeball.png';
import { useStyles } from 'src/styles/spinner.styles';

const PokeSpinner = () => {
    const { Spinner } = useStyles();

    return (
        <div className={Spinner}>
            <img src={Pokeball} alt="Pokeball Spinner" />
        </div>
    );
}

export { PokeSpinner };