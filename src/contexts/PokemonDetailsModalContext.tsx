import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { getPokemon } from '../components/Pokemon';

interface PokemonDetailsModalContextData {
    isDetailsModalOpen: boolean;
    toggleModal: () => void;
    getQuery: (params: string) => void;
    poke: Promise<any>;
}

interface ProviderProps {
    children: ReactNode;

}

export const PokemonDetailsContext = createContext({} as PokemonDetailsModalContextData)

export const PokemonDetailsContextProvider = ({children}: ProviderProps) => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [newQuery, setNewQuery] = useState('')
    const [poke, setPoke] = useState(null)

    const getQuery = (value: string) => {
        setNewQuery(value)
    }
 
    useEffect(() => {
        //console.log(newQuery)
        setPoke(getPokemon(newQuery))
    }, [newQuery])

    const toggleModal = () => {
        window.addEventListener('click',e => {
            e.preventDefault()
        })

        setIsDetailsModalOpen(!isDetailsModalOpen)
    }

    return(
        <PokemonDetailsContext.Provider value={{
            isDetailsModalOpen,
            getQuery,
            toggleModal,
            poke
        }}>
            { children }
        </PokemonDetailsContext.Provider>
    )
}