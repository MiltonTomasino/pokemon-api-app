import React, { useState } from 'react';
import "../css/game.css";

function Game() {
    const [pokemonList, setPokemonList] = useState([]);

    const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const fetchPokemon10 = async () => {
        const promises = [];
      
        for (let i = 0; i < 10; i++) {
          const id = Math.floor(Math.random()* 1024) + 1;
          console.log("Random is:", id);
          promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) => res.json()));
        }
      
        try {
      
          const res = await Promise.all(promises);
          setPokemonList(res);
          console.log("List of 10 Pokemon:", res);
      
        } catch (err) {
          console.error("Error fetching 10 random Pokemon:", err);
        }
      
      }

  return (
    <div className='game-container'>
        <button onClick={fetchPokemon10}>Generate Pokemon</button>

        <div className='pokemon-list'>
            {pokemonList.map((p, i) => (
            <div key={i} className='content-body'>
              <h1>{ cap(p.name) }</h1>
              <img src={p.sprites.front_default} alt='no pic'/>
              <div className='type-container'>
                  {p.types.map((t, i) => (
                    <p key={i}>{ t.type.name }</p>
                  ))}
              </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Game