import React from 'react';
import PokemonContainer from '../components/PokemonContainer';
import PokemonDetailsModal from '../components/PokemonDetailsModal';
import Searchbar from '../components/Searchbar';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    
    <div className={styles.container}>
      <PokemonDetailsModal />
      <h1 className={styles.logo}>poke10</h1>
      <Searchbar />
      <PokemonContainer />
    </div>
  )
}
