import { url } from 'node:inspector';
import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { getPokemon, getPokemonData } from '../components/Pokemon';

interface PokeData {
    id: string;
    name: string;
    picUrl: string;
    types: {
        type1: string;
        type2: string;
    };
    bio: string;
}

interface PokemonDetailsModalContextData {
    isDetailsModalOpen: boolean;
    toggleModal: () => void;
    getQuery: (params: string) => void;
    poke: PokeData;
}

interface ProviderProps {
    children: ReactNode;

}

export const PokemonDetailsContext = createContext({} as PokemonDetailsModalContextData)

export const PokemonDetailsContextProvider = ({children}: ProviderProps) => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [ pokeDataUrl, setPokeDataUrl ] = useState('')
    const [ pokeData, setPokeData ] = useState(null)
    const [newQuery, setNewQuery] = useState('')

    const pokemon = {
        id: '004',
        name: newQuery,
        picUrl: 'drawable/pokeball.png',
        types: {
            type1: 'fire',
            type2: 'flying'
        },
        bio: 'A dragon like animal'
    }

    const [poke, setPoke] = useState(pokemon)

    const getQuery = (value: string) => {
        setNewQuery(value)
    }
 
    useEffect( () => {
        //console.log(newQuery)
        setPoke(pokemon)
        getPokemon().then(res => {
            res.map(pokemon => {
                pokemon.name === newQuery && setPokeDataUrl(pokemon.url)
            })
        } )
    }, [newQuery])

    useEffect( () => {
        getPokemonData(pokeDataUrl).then(res => {
            const { id, name, types, sprites } = res
            console.log(res)
            setPoke({
                id: id,
                name: name,
                picUrl: sprites.front_default,
                types: {
                    type1: types[0].type.name,
                    type2: types.length>0 ? types[1].type.name : types[0].type.name
                },
                bio: 'Another pokemon'
            })
        })
    }, [pokeDataUrl])

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