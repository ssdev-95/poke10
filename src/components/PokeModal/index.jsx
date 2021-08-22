/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { usePokedex } from 'src/contexts/Pokemon';
import { useStyles } from 'src/styles/modal.styles';
import ShinyIcon from 'src/icons/shiny.svg';

const Modal = () => {
    const { Modal } = useStyles();
    const [showShiny, setShowShiny] = useState(false);
    const { selectedPoke, getPokemonData, toggleModal } = usePokedex();
    const [pokemon, setPokemon] = useState({});
    
    const toggleShiny = () => {
        setShowShiny(!showShiny);
    }

    useEffect(()=>{
        getPokemonData(selectedPoke).then((res)=>setPokemon(res));
    }, []);

    return (
        <div className={Modal}>
            <h2>{pokemon?.name}</h2>
            <button onClick={toggleModal}>
                <img src={ShinyIcon} alt="shiny_icon" />
            </button>
            <img
              src={`${showShiny?(pokemon?.sprites?.shiny):(pokemon?.sprites?.normal)}`}
              alt={pokemon?.name}
            />
        </div>
    );
}

export { Modal };