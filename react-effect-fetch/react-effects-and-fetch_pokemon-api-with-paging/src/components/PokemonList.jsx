import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        const data = await response.json();
        console.log("Fetched data:", data);
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  if (!pokemon.length) {
    return <h1>No Pokémon</h1>;
  }

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          if (offset !== 0) {
            setOffset((offset) => offset - limit);
          }
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => setOffset((offset) => offset + limit)}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
