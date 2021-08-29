import { createContext, useContext, useState } from "react";
import axios from "axios";

const PokemonContext = createContext({});

const PokemonProvider = ({ children }) => {
  const [dex, setDex] = useState(null);
  const [selectedPoke, setSelectedPoke] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSelectedPokemon = (pokename) => {
    setSelectedPoke(pokename);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getPokemons = (offset, limit) => {
    const uri = `${process.env.REACT_APP_API}/?offset=${offset}&limit=${limit}`;
    let pokes = [];

    axios.get(uri).then(({ data }) => {
      data["results"].forEach(({ name }) => {
        getPokemonData(name).then((res) => {
          pokes.push(res);

          // setDex((prev)=>([...prev, res]));
        });
      });
    });

    setDex(pokes);
    localStorage['dex'] = JSON.stringify(pokes);
  };

  const getPokemonData = async (name) => {
    const uri = `${process.env.REACT_APP_API}/${name}`;
    const { data } = await axios.get(uri);

    const pokemon = {
      id: Number(data["id"]),
      name: `${data["name"]}`,
      height: Number(data["height"]),
      weight: Number(data["weight"]),
      stats: {
        attack: Number(data.stats[0].base_stat),
        defense: Number(data.stats[1].base_stat),
        hp: Number(data.stats[2].base_stat),
        special_attack: Number(data.stats[3].base_stat),
        special_defense: Number(data.stats[4].base_stat),
        speed: Number(data.stats[5].base_stat),
      },
      sprites: {
        normal: `${data.sprites["front_default"]}`,
        shiny: `${data.sprites["front_shiny"]}`,
      },
      types: data["types"].map(({ slot, type }) => type.name),
      flavor_text: await getFlavorText(data["id"]),
    };

    return pokemon;
  };

  const getFlavorText = async (id) => {
    const uri = `${process.env.REACT_APP_API}-species/${id}/`;

    const { data } = await axios.get(uri);

    const flavor = data["flavor_text_entries"].filter(
      (text) => text.language.name === "en"
    )[0]["flavor_text"];

    return flavor;
  };

  return (
    <PokemonContext.Provider
      value={{
        dex,
        getPokemons,
        getPokemonData,

        selectedPoke,
        toggleSelectedPokemon,

        isModalOpen,
        toggleModal,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const usePokedex = () => {
  return useContext(PokemonContext);
};

export { PokemonProvider, usePokedex };
