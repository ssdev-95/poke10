import { Card } from '@material-ui/core';
import Pokeball from 'src/icons/pokeball.png';
import { useStyles } from 'src/styles/spinner.styles';

const PokeSpinner = () => {
    const { Spinner } = useStyles();

    return (
        <Card className={Spinner}>
            <img src={Pokeball} alt="Pokeball Spinner" />
        </Card>
    );
}

export { PokeSpinner };