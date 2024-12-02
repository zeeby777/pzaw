import logo from './logo.svg';
import TypesBar from './TypesBar';
import PokemonList from './PokemonList';
import './App.css';
import ky from 'ky';
import { useState, useEffect } from 'react';

function App() {
  const [selectedTypes, setSelectedTypes] = useState([])
  const [fetchedPokemon, setFetchedPokemon] = useState([])

  useEffect(() => {
    let queryString = "?"
    selectedTypes.forEach(type => {
      queryString += "pokemonTypes=" + type + "&"
    });
    if(selectedTypes.length != 0){
      ky.get('http://localhost:8080/pokemon/query/type' + queryString).json().then((data) => {
        setFetchedPokemon(data)
        console.log(data)
      })
    } else{
      setFetchedPokemon([])
    }
  }, [selectedTypes])

  return (
    <div>
      <TypesBar selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
      <PokemonList fetchedPokemon={fetchedPokemon} />
    </div>
  );
}

export default App;
