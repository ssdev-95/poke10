import React, {useContext, useEffect} from 'react';
import { PokemonDetailsContext } from '../contexts/PokemonDetailsModalContext';
import { SearchbarContext } from '../contexts/SearchbarContext';

import styles from '../styles/components/PokemonDetailsModal.module.css';

export default function PokemonDetailsModal() {
    const { query } = useContext(SearchbarContext)
    const {isDetailsModalOpen, getQuery, toggleModal, poke} = useContext(PokemonDetailsContext)
    //const pokemon = Pokemon()

    const pokemon = {
        id: '004',
        name: query,
        picUrl: 'drawable/pokeball.png',
        types: {
            type1: 'fire',
            type2: 'flying'
        },
        bio: 'A dragon like animal'
    }


    useEffect(()=>{
        getQuery(query)
    }, [query])

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

/*
*/