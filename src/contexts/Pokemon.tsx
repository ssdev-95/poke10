import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const PokemonContext = createContext({} as any);

const PokemonProvider = ({ children }: any) => {
    const [pokedex, setPokedex] = useState<any>([]);

    const getPokemons = async (offset:number, limit:number) => {
        const uri = `${process.env.REACT_APP_API}/pokemon/?offset=${offset}&limit=${limit}`
    
        const {data} = await axios.get(uri)
       
        console.log(data['results'])
    }
    
    const getPokemonData = async (url: string) => {
        const {data} = await axios.get(url)
    }
    
    // const getFlavorText = async (id: number) => {
    //     const flavorUrl = `${process.env.REACT_APP_API_URI}/pokemon-species/${id}/`
    //     const entries = await axios.get(flavorUrl)
    //     const entry_data = await entries.data
    //     const entry_texts = entry_data.flavor_text_entries.filter((flavor)=>flavor.language.name==='en')
    //     const flavor_text = entry_texts[entry_texts.length-1].flavor_text
    //     return flavor_text
    // }
    
    // const getPokemonByName = async (name:string) => {
    //     const pokeUrl = `${process.env.REACT_APP_API_URI}/pokemon/${name}/`
        
    //     const res = await axios.get(pokeUrl)
    //     const ponse = await res.data
    
    //     return ponse
    // }

    useEffect(()=>{
        if(localStorage['pokemons']===null || localStorage['pokemons']===undefined) {
            getPokemons(0, 2);
            setPokedex([]);
        } else {
            setPokedex(JSON.parse(localStorage['pokemons']))
        }
    }, [])

    return (
        <PokemonContext.Provider value={{
            pokedex
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

const usePokemon = () => {
    return useContext(PokemonContext);
}

export { PokemonProvider, usePokemon };