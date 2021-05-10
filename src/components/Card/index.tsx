import React from 'react'

import styles from '@/components/Card/card.module.scss'
import { CardProps } from '@/types'

export default function Card({pokemon}: CardProps) {
    return (
        <div key={pokemon.id} className={styles.card}>
            <header>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
            </header>
            <img src={pokemon.sprites.normal} alt="Pokemon sprite" />
            <div className={styles.typess}>
                {
                    pokemon.types.map(type=><span>{type}</span>)
                }
            </div>
        </div>
    )
}
