import { useContext, createContext, ReactNode } from 'react';
import { PokemonDetailsContext } from '../contexts/PokemonDetailsModalContext';

interface SearchbarContextData {
    submit: (params) => void;
}

interface ProviderProps {
    children: ReactNode;
}

export const SearchbarContext = createContext({} as SearchbarContextData)

export const SearchbarContextProvider = ({children}: ProviderProps) => {
    const { toggleModal } = useContext(PokemonDetailsContext)

    const submit = (data) => {
        window.addEventListener('click',e => {
            e.preventDefault()
        })

        toggleModal()
        
        console.log(data.pokename)
    }

    return (
        <SearchbarContext.Provider value={{
            submit,
        }}>
            {children}
        </SearchbarContext.Provider>
    )
}