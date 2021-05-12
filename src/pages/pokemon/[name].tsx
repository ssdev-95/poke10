import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { getFlavorText, getPokemonByName, TypeColors } from '@/pages/_api/Pokemon'
import { PokemonDetailsProps } from '@/types'

import styles from '@/styles/pokemon.module.scss'

export default function PokemonDetails({ pokemon }:PokemonDetailsProps) {
    const [shinySelected, setShinySelected] = useState(false)
    const router = useRouter()
    const pokemonSprite = shinySelected?pokemon.sprites.shiny:pokemon.sprites.normal

    const toggleShinySelection = () => {
        setShinySelected(!shinySelected)
    }

    const goHome = () => {
        router.push('/')
    }

    return (
        <div className={styles.pokemoncontainer}>
            <div className={styles.details}></div>
            <div className={styles.sprite}>
                <img className={styles.spriteimg} src={!pokemon?'/pokeball.png':pokemonSprite} alt={`${pokemon.name} Sprite`} />
                <img
                    className={styles.shinyicon}
                    src="/shiny.svg"
                    alt="Shiny Icon"
                    onClick={toggleShinySelection}
                />
                <div className={styles.types}>
                    {
                        pokemon.types.map(type=>(<span key={type}>{type}</span>))
                    }
                </div>
            </div>
            <div
              className={styles.homebutton}
              onClick={goHome}
            >
                <span>&lt;&lt;&nbsp;home</span>
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
    const pokemonData = await getPokemonByName(`${slug.name}`)

    const pokemon = {
        id: pokemonData.id,
        name: pokemonData.name,
        types: pokemonData.types.map(type=>type.type.name),
        height: pokemonData.height,
        weight: pokemonData.weight,
        stats: pokemonData.stats.map(stat=>({
            stat: stat.stat.name,
            baseStat: stat.base_stat
        })),
        sprites: {
            normal: pokemonData.sprites.front_default,
            shiny: pokemonData.sprites.front_shiny
        },
        dex_entry: await getFlavorText(pokemonData.id)
    }

    if(!pokemonData) {
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
