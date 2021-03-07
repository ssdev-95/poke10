import { ReactNode, createContext, useState } from 'react';

interface PokemonDetailsModalContextData {
    isDetailsModalOpen: boolean;
    toggleModal: () => void;
}

interface ProviderProps {
    children: ReactNode;

}

export const PokemonDetailsContext = createContext({} as PokemonDetailsModalContextData)

export const PokemonDetailsContextProvider = ({children}: ProviderProps) => {

    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

    const toggleModal = () => {
        window.addEventListener('click',e => {
            e.preventDefault()
        })

        setIsDetailsModalOpen(!isDetailsModalOpen)
    }

    return(
        <PokemonDetailsContext.Provider value={{
            isDetailsModalOpen,
            toggleModal
        }}>
            { children }
        </PokemonDetailsContext.Provider>
    )
}