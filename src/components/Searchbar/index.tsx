import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import styles from './searchbar.module.scss'

export default function Searchbar() {
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const submit = (data:any) => {
        router.push(`/${data.pokename}`)
    }

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
               onClick={handleSubmit(submit)}
            >
                <img src="/pokeball.png" alt="Pokeball icon" />
                <span>GO</span>
            </button>
        </div>
    )
}
