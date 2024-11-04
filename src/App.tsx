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

  return (
    <nav>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />;
      {pokemonList.map((pokemon) => (
        <button
          key={pokemon.name}
          onClick={() => {
            const index = pokemonList.findIndex((p) => p.name === pokemon.name);
            setPokemonIndex(index);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default App;
