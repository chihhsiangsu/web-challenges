import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  async function startFetching() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    startFetching();
  }, []);

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
