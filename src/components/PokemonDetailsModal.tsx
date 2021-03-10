import React, {useState, useContext, useEffect} from 'react';
import { PokemonDetailsContext } from '../contexts/PokemonDetailsModalContext';
import { SearchbarContext } from '../contexts/SearchbarContext';
import { TypeColors } from './Pokemon';

import styles from '../styles/components/PokemonDetailsModal.module.css';

export default function PokemonDetailsModal() {
    const { query } = useContext(SearchbarContext)
    const {isDetailsModalOpen, getQuery, toggleModal, poke} = useContext(PokemonDetailsContext)
    const [typeColors, setTypeColors] = useState(['',''])


    useEffect(()=>{
        getQuery(query)
    }, [query])

    useEffect(() => {
        let typeColor1 = ''
        let typeColor2 = ''
        TypeColors.map(color => {
            color.name===poke.types.type1 && (typeColor1 = color.color)
        })
        TypeColors.map(color => {
            color.name===poke.types.type2 && (typeColor2 = color.color)
        })
        setTypeColors([typeColor1, typeColor2])
    }, [poke])

    return (
        (isDetailsModalOpen &&(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p className={styles.pokename}>{poke.name}</p>
                <p className={styles.pokeid}>{poke.id}</p>
                <a className={styles.deleteButton} href="#" onClick={toggleModal}>x</a>
                <img className={styles.pokepic} src={poke.picUrl} alt=""/>
                <div className={styles.poketypes}>
                    <p className={styles.type1} style={{backgroundColor: typeColors[0]}}>
                        {poke.types.type1}
                    </p>
                    <p className={styles.type2} style={{backgroundColor: typeColors[1]}}>
                        {poke.types.type2}
                    </p>
                </div>
                <p className={styles.pokebio}>{poke.bio}</p>
            </div>
        </div>))
    )
}

/*
*/