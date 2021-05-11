import React from 'react'

import styles from '@/components/Card/card.module.scss'
import { CardProps } from '@/types'

export default function Card({pokemon, id}: CardProps) {
    return (
        <div key={id} className={styles.card}>
            <header>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
            </header>
            <img src={pokemon.sprites.normal} alt="Pokemon sprite" />
            <div className={styles.types}>
                {
                    pokemon.types.map((type, index)=><span key={index}>{type}</span>)
                }
            </div>
        </div>
    )
}
