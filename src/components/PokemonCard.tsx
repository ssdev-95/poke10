import React from 'react'

import styles from '../styles/components/PokemonCard.module.css';

export function PokemonCard(props) {
    return (
        <div className={styles.cardContainer}>
            <p className={styles.pokename}>{props.name}</p>
            <img className={styles.pokepic} src={props.url} alt="Pokemon picture"/>
            <div className={styles.types}>
                <p>{props.type1}</p>
                <p>{props.type2}</p>
            </div>
        </div>
    )
}