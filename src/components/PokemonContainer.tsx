import React, {useEffect, useState} from 'react'
import { getPokemons, getPokemonData } from './Pokemon';
import { PokemonCard } from './PokemonCard';

import styles from '../styles/components/PokemonContainer.module.css';

export default function PokemonContainer() {
    const [dex, setDex] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(()=>{
        getPokemons().then(res=>{
            res.map(result=>{
                getPokemonData(result.url).then(ponse=>{
                    const {id, name, types, sprites} = ponse
                    setDex([...dex, {pokeid: id, pokename: name,
                                     poketype1: types[0].type.name,
                                     poketype2: types[1]?.type.name,
                                     pokepic: sprites.front_default}])
                })
            })
        })
    },[])

    useEffect(()=>{
        try{dex.map(poke=>{
            setPokedex([...pokedex, <PokemonCard key={poke.pokeid} name={`${poke.pokeid}. ${poke.pokename}`}
                                                 type1={poke.poketype1}
                                                 type2={poke.poketype2}
                                                 url={poke.pokepic}/>])
        })}catch(err) {
            console.log(err)
        }
        console.log(dex.length)

    }, [dex])

    return (
        <div className={styles.container}>
            {pokedex}
        </div>
    )
}