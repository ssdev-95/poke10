import React, { useContext } from 'react';
import {useForm} from 'react-hook-form';
import { SearchbarContext } from '../contexts/SearchbarContext';

//import Pokemon from './Pokemon';

import styles from '../styles/components/Searchbar.module.css';

export default function Searchbar() {
    const {register, handleSubmit} = useForm()
    const { submit } = useContext(SearchbarContext)

    return (
        <div className={styles.container}>
            <input ref={register} type="text" name="pokename" id="pokename"/>
            <a href="#" onClick={handleSubmit(submit)}>
                <p>GO</p>
                <img src="drawable/pokeball.png" alt="pokeball icon"/>
            </a>
        </div>
    )
}