import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const updateNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };

  const updatePrevious = () => {
    setPokemonIndex(
      (prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length
    );
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={updatePrevious}>Précédent</button>
      <button onClick={updateNext}>Suivant</button>
    </div>
  );
}

export default App;
