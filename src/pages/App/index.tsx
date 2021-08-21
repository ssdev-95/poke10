import { useHistory } from 'react-router-dom';
import Pokeball from 'src/icons/pokeball.png';
import { useStyles } from 'src/styles/home.styles';

function App() {
    const router = useHistory();
    const { Home } = useStyles();

    return (
        <main className={Home}>
            <button onClick={()=>router.push('/dex')}>
                <img src={Pokeball} alt="Pokeball"/>
            </button>
        </main>
    );
}

export default App;