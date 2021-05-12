import React from 'react'
import { useRouter } from 'next/router'

import styles from '@/components/Card/card.module.scss'
import { CardProps } from '@/types'

export default function Card({ pokemon }: CardProps) {
    const router = useRouter()

    const goToPokemonDetail = () => {
        router.push(`/pokemon/${pokemon.name}`)
    }

    return (
        <div
          className={styles.card}
          onClick={goToPokemonDetail}
        >
            <header>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
            </header>
            <img src={pokemon.sprites.normal} alt="Pokemon sprite" />
            <div className={styles.types}>
                {
                    pokemon.types.map((type)=><span key={type}>{type}</span>)
                }
            </div>
        </div>
    )
}
