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
            <button name="modal" onClick={toggleModal}>x</button>
            <h2>{`${pokemon?.id}. ${pokemon?.name}`}</h2>
            <div>
                <button name="shiny" className={showShiny?'shiny':''} onClick={toggleShiny}>
                    <img src={ShinyIcon} alt="shiny_icon" />
                </button>
                <img
                  src={`${showShiny?(pokemon?.sprites?.shiny):(pokemon?.sprites?.normal)}`}
                  alt={pokemon?.name}
                />
            </div>
            <div>
                <span>{`height: ${pokemon?.height}`}</span>
                <span>{`weight: ${pokemon?.weight}`}</span>
                <span>{`hp: ${pokemon?.stats?.hp}`}</span>
                <span>{`attack: ${pokemon?.stats?.attack}`}</span>
                <span>{`defense: ${pokemon?.stats?.defense}`}</span>
                <span>{`spAttack: ${pokemon?.stats?.special_attack}`}</span>
                <span>{`spDefense: ${pokemon?.stats?.special_defense}`}</span>
                <span>{`speed: ${pokemon?.stats?.speed}`}</span>
            </div>
            <p>{pokemon['flavor_text']}</p>
        </div>
    );
}

export { Modal };