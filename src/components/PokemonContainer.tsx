import React, {useEffect} from 'react'
import { PokemonCard } from './PokemonCard';
import { getPokemons, getPokemonData } from './Pokemon';
import styles from '../styles/components/PokemonContainer.module.css';

export default function PokemonContainer() {
    return (
        <div className={styles.container}>
        </div>
    )
}