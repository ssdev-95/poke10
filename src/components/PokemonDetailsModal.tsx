import React, {useContext} from 'react';
import styles from '../styles/components/PokemonDetailsModal.module.css';
import { PokemonDetailsContext } from '../contexts/PokemonDetailsModalContext';
import Pokemon from './Pokemon';

export default function PokemonDetailsModal() {
    const pokemon = {
        id: '006',
        name: 'charizard',
        types: {
            type1: 'fire',
            type2: 'flying'
        },
        bio: 'Dragon like pokemon with flaming tail.',
        picUrl: 'drawable/pokeball.png'
    }

    const {isDetailsModalOpen, toggleModal} = useContext(PokemonDetailsContext)


    return (
        (isDetailsModalOpen &&(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p className={styles.pokename}>{pokemon.name}</p>
                <p className={styles.pokeid}>{pokemon.id}</p>
                <a className={styles.deleteButton} href="#" onClick={toggleModal}>x</a>
                <img className={styles.pokepic} src={pokemon.picUrl} alt=""/>
                <div className={styles.poketypes}>
                    <p className={styles.type1}>{pokemon.types.type1}</p>
                    <p className={styles.type2}>{pokemon.types.type2}</p>
                </div>
                <p className={styles.pokebio}>{pokemon.bio}</p>
            </div>
        </div>))
    )
}