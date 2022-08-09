import { useEffect, useState} from 'react';
import './App.css';
import {getPokex} from './Services.js'

function Home() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      const pokeData =  async () => {
      const  pokes = await getPokex(100);
      const array = await pokes.results;
      setPokemons(array);
      };
      pokeData();
  } ,[]);
  return (
    <>
    <h1>Pokemon</h1>
    {pokemons.map((pokemon,index) => {
        return(
        <div key={index}>
        <h3> {pokemon.name}</h3>
        <h5> {pokemon.}</h5>
        </div>
    ) } )
    }
    </> )
}

export default Home