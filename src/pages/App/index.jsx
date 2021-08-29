import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Pokeball from 'src/icons/pokeball.png';
import { useStyles } from 'src/styles/home.styles';

function App() {
    const router = useHistory();
    const { Home } = useStyles();

    return (
        <Box className={Home}>
            <button onClick={()=>router.push('/dex')}>
                <img src={Pokeball} alt="Pokeball"/>
            </button>
        </Box>
    );
}

export default App;