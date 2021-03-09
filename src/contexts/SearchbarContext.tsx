import { useState, useContext, createContext, ReactNode, useEffect } from 'react';
import { PokemonDetailsContext } from '../contexts/PokemonDetailsModalContext';

interface SearchbarContextData {
    submit: (params) => void;
    query: string;
}

interface ProviderProps {
    children: ReactNode;
}

export const SearchbarContext = createContext({} as SearchbarContextData)

export const SearchbarContextProvider = ({children}: ProviderProps) => {
    const { toggleModal } = useContext(PokemonDetailsContext)
    const [ query, setQuery ] = useState('charizard')

    const formatQuery = (query) => {
        return query.replace(/([A-Z])\g/, '$1').toLowerCase()
    }

    const submit = (data) => {
        window.addEventListener('click',e => {
            e.preventDefault()
        })

        toggleModal()
        setQuery(formatQuery(data.pokename))
        //setQuery(JSON.stringify(data.pokename))
        //console.log(data.pokename)
    }

    /*useEffect(()=>{
        console.log(query)
    }, [query])*/

    return (
        <SearchbarContext.Provider value={{
            submit,
            query
        }}>
            {children}
        </SearchbarContext.Provider>
    )
}