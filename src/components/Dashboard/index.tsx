import React from 'react'
import Pokedex from '@/components/Pokedex'
import Searchbar from '@/components/Searchbar'

import styles from '@/components/Dashboard/dashboard.module.scss'

export default function Dashboard() {
    return (
        <main className={styles.dashboard}>
            <Searchbar />
            <Pokedex />
        </main>
    )
}
