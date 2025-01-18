import React, { useState } from 'react';
// import Pokedex from 'pokedex-promise-v2';
import "../css/search.css"

function PokemonSearch() {

  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const P = new Pokedex();

  const fetchPokemon1 = async () => {
    try {
      setIsLoading(true);
      // const getPokemon = await P.getPokemonSpeciesByName(searchTerm);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`)

      if (!res.ok) {
        // throw new Error("Failed to fecth pokemon.");
        console.error("Failed to fetch Pokemon.")
        setPokemon(null);
        setError("Failed to fetch Pokemon.")
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      console.log("Fetched data:", data);
      setPokemon(data);
      setIsLoading(false);
    } catch (err) {
      setPokemon(null);
      throw err;
    }
  }

const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <div className='container'>
        <div className='search'>
          <input 
            type='text' 
            placeholder='pokemon name'
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchPokemon1();
              }
            }}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <button onClick={fetchPokemon1}>Search</button>
        </div>
        {isLoading ? (
          <div className='loading-icon'>Loading</div>
        ) : (
          <>
            {pokemon ? (
            <div className='content-body'>
              <h1>{ cap(pokemon.name) }</h1>
              <img src={pokemon.sprites.front_default} alt='no pic'/>
              <div className='type-container'>
                  {pokemon.types.map((t, i) => (
                    <p key={i}>{ t.type.name }</p>
                  ))}
              </div>
            </div>
          ) : (
            <>{ error }</>
          )}
          </>
        )}
      </div>
    </>
    
  )
}

export default PokemonSearch