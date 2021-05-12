import React, { useState, FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getPokemonNames, getFlavorText, getPokemonByName, TypeColors } from '@/api/Pokemon'
import { PokemonDetailsProps } from '@/types'

import styles from '@/styles/pokemon.module.scss'

const PokemonDetails = ({ pokemon }:PokemonDetailsProps) => {
    const [shinySelected, setShinySelected] = useState(false)
    const pokemonSprite = shinySelected?pokemon.sprites.shiny:pokemon.sprites.normal
    const filterValues = shinySelected?'100%':'0%'

    const toggleShinySelection = () => {
        setShinySelected(!shinySelected)
    }

    return (
        <div className={styles.pokemoncontainer}>
            <div className={styles.details}>
                <h1>{pokemon.name}</h1>
                <div className={styles.pokestats}>
                    <div className={styles.stat}>
                        <span>weight</span>
                        <span>{pokemon.weight}</span>
                    </div>
                    {
                        pokemon.stats.map(stat=>(
                            <div
                              key={stat.stat}
                              className={styles.stat}>
                                <span>{stat.stat==='special-attack'?'spAtack':(
                                    stat.stat==='special-defense'?'spDefense':stat.stat
                                )}</span>
                                <span>{stat.baseStat}</span>
                            </div>
                        ))
                   }
                </div>
                <p>{pokemon.dex_entry}</p>
            </div>
            <div className={styles.sprite}>
                <img className={styles.spriteimg} src={!pokemon?'/pokeball.png':pokemonSprite} alt={`${pokemon.name} Sprite`} />
                <img
                    className={styles.shinyicon}
                    src="/shiny.svg"
                    alt="Shiny Icon"
                    onClick={toggleShinySelection}
                    style={{filter: `invert(${filterValues})`}}
                />
                <div className={styles.types}>
                    {
                        pokemon.types.map(type=>(<span
                            key={type}
                            style={{ background: TypeColors.filter(tp=>{
                                if(tp.name===type) return tp
                            })[0].color}}
                        >{type}</span>))
                    }
                </div>
            </div>
            <a href="/">&lt;&lt;&nbsp;home</a>
        </div>
    )
}

export const getStaticPaths:GetStaticPaths = async () => {
    const pokenames = await getPokemonNames()
    const name = ''

    console.log(pokenames)

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

export default PokemonDetails
