import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/pokeCard/pokeCard';

const PokeState = () => {
    
    const [ allPokemons, setAllPokemons ] = useState([])
    const [ loadMore, setLoadMore ] = useState('https://pokeapi.co/api/v2/pokemon?limit=50')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results)  {
        results.forEach( async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data =  await res.json()
            setAllPokemons( currentList => [...currentList, data])
            await allPokemons.sort((a, b) => a.id - b.id)
        })
        }
        createPokemonObject(data.results)
    }

  useEffect(() => {
    getAllPokemons()
   }, [])


  return(
    <div className="pokemon-container">
        <div className="cards">
            {allPokemons.map( (pokemonStats, index) => 
                <PokemonCard
                    key={index}
                    id={pokemonStats.id}
                    image={pokemonStats.sprites.other.dream_world.front_default}
                    name={pokemonStats.name}
                    type={pokemonStats.types[0].type.name}
                />
            )}
        </div>
        <button className="more" onClick={() => getAllPokemons()}>Ver más</button>
    </div>
  )

}


export default PokeState;