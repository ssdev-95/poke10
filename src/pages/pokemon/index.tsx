import React, { useEffect, FC } from 'react'
import { useRouter } from 'next/router'

import styles from '@/styles/pokedexpage.module.scss'

const Pokedex:FC = () => {
    const router = useRouter()
    
    useEffect(()=>{
        setTimeout(()=>router.push('/'), 4000)
    }, [])

    return (
        <div className={styles.pokedexPageContainer}>
            <h1>404</h1>
            <span>Pokemon not found</span>
        </div>
    )
}

export default Pokedex
