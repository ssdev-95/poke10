import React from 'react'
import { useForm } from 'react-hook-form'

import styles from './searchbar.module.scss'

export default function Searchbar() {
    const { register, handleSubmit } = useForm()

    return (
        <div className={styles.searchbar}>
            <input
               type="text"
               name="pokename"
               id="pokename"
               { ...register('pokename') }
            />
            <button
               className={styles.button}
               onClick={()=>console.log('clicked!')}
            >
                <img src="/pokeball.png" alt="Pokeball icon" />
                <span>GO</span>
            </button>
        </div>
    )
}
