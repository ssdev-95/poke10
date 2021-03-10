import React, {useEffect, useState} from 'react'
import { PokemonCard } from './PokemonCard';
import { getPokemons, getPokemonData } from './Pokemon';
import styles from '../styles/components/PokemonContainer.module.css';

export default function PokemonContainer() {
    const [dex, setDex] = useState([]) 
    const [pokedex, setPokedex] = useState([]) 

    /*const populateDex = () => {
        dex.forEach(mon => {
            console.log(`{ 
                ${mon.name} 
                ${mon.pic}
                ${mon.types[0].type.name}
                ${mon.types[1]?.type.name}
            }`)
        })
     }*/

    useEffect(()=>{
        getPokemons().then(res=>{
            setPokedex(res)
        })
    }, [])

    useEffect(()=>{
        let dex = []
        pokedex.map(pokemon=>{
            getPokemonData(pokemon.url).then(res=>{
                const {id, name, sprites, types} = res
                dex.push({
                    id: id,
                    name: name,
                    pic: sprites.front_default,
                    type1: types[0].type.name,
                    type2: types[1]?.type.name
                })
            })
        })
        setDex(dex)
    }, [pokedex])

    return (
        <div className={styles.container}>
            {
                dex.length>0&&(dex.map(poke=>{
                    return (
                        <PokemonCard name={poke.name} 
                                     url={poke.pic}
                                     type1={poke.type1}
                                     type2={poke.type2}
                                     key={poke.id}
                        />
                    )
                }))
            }
        </div>
    )
}