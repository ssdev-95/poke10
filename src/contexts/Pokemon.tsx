/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from 'react';
import { IProvider, IPokemonData, IPokemon } from 'src/@types';
import axios from 'axios';

const PokemonContext = createContext({} as IPokemonData);

const PokemonProvider = ({ children }: IProvider) => {
    // eslint-disable-next-line
    const [dex, setDex] = useState<IPokemon[]>([]);

    const getPokemons = async (offset:number, limit:number) => {
        const uri = `${process.env.REACT_APP_API}/?offset=${offset}&limit=${limit}`;
        const {data} = await axios.get(uri);
        
        let dex: IPokemon[] = [];
        data['results'].forEach(({name}:{name:string, url:string})=>{

            getPokemonData(name).then(res=>{
                dex.push(res);
            })
        });
        
        setDex(dex);
    }
    
    const getPokemonData = async (name: string) => {
        const uri = `${process.env.REACT_APP_API}/${name}`
        const { data } = await axios.get(uri)

        const pokemon = {
            id: Number(data['id']),
            name: `${data['name']}`,
            height: Number(data['height']),
            weight: Number(data['weight']),
            stats: {
                attack: Number(data.stats[0].base_stat),
                defense: Number(data.stats[1].base_stat),
                hp: Number(data.stats[2].base_stat),
                special_attack: Number(data.stats[3].base_stat),
                special_defense: Number(data.stats[4].base_stat),
                speed: Number(data.stats[5].base_stat)
            },
            sprites: {
                normal: `${data.sprites['front_default']}`,
                shiny: `${data.sprites['front_shiny']}`
            },
            types: data['types'].map(({slot, type}:any)=>type.name) as string[],
            flavor_text: await getFlavorText(data['id'])
        } as IPokemon;

        return pokemon;
    }
    
    const getFlavorText = async (id: number) => {
        const uri = `${process.env.REACT_APP_API}-species/${id}/`;

        const {data} = await axios.get(uri);

        const flavor = data['flavor_text_entries'].filter((text:{flavor_text:string,language:{name:string,url:string}})=>(text.language.name==='en'))[0]['flavor_text'] as string;

        return flavor;
    }

    useEffect(()=>{
        if(dex.length===0) {
            getPokemons(0, 15)
        }
    }, [])

    return (
        <PokemonContext.Provider value={{
            dex,
            getPokemonData
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

const usePokemon = () => {
    return useContext(PokemonContext);
}

export { PokemonProvider, usePokemon };