import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getPokemons } from '@/pages/api/Pokemon'

import styles from '@/styles/pokemon.module.scss'

export default function PokemonDetails({ pokemon }) {
    const [shinySelected, setShinySelected] = useState(false)

    const pokemonSprite = shinySelected?'':''

    const toggleShinySelection = () => {
        setShinySelected(!shinySelected)
    }

    return (
        <div className={styles.pokemoncontainer}>
            <div className={styles.details}></div>
            <div className={styles.sprite}>
                <img src={!pokemon?'/pokeball.png':pokemonSprite} alt="Pokemon Sprite" />
                <img src="/shiny.svg" alt="Shiny Icon" />
            </div>
        </div>
    )
}

export const getStaticPaths:GetStaticPaths = async () => {
    const name = ''

    return {
        paths: [{
            params: {
                name
            }
        }],
        fallback: 'blocking'
    }
}

export const getStaticProps:GetStaticProps = async (ctx) => {
    const slug = ctx.params
    const pokemon = {
        name: slug.name
    }

    console.log(slug.name)

    if(!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 60*60*24
    }
}
