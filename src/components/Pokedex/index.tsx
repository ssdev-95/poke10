import React from 'react'

import styles from '@/components/Pokedex/pokedex.module.scss'
import Card from '@/components/Card'
import { usePokemon } from '@/contexts/Pokemon'

export default function Pokedex() {
    const { pokemons } = usePokemon()

    return (
        <section className={styles.pokedex}>
            {
                pokemons.map(pokemon=><Card pokemon={pokemon} />)
            }
        </section>
    )
}
