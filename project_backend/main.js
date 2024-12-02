const fs = require('fs')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
let pokedex = [];
let pokeTypes = [];

app.use(cors())

fs.readFile('./resources/pokedex.json', function(err, data) { 
  if (err) throw err; 

  pokedex = Object.values(JSON.parse(data)); 
}); 

fs.readFile('./resources/types.json', function(err, data) { 
  if (err) throw err; 

  pokeTypes = Object.values(JSON.parse(data)); 
}); 


app.get('/pokemon/:pokemonId/', (req, res) => {
  const pokemonId = req.params.pokemonId
  res.send(pokedex[pokemonId - 1])
});

app.get('/pokemon/query/type/', (req, res) => {
  let pokemonTypes = req.query.pokemonTypes
  console.log(pokemonTypes)
  let fetchedPokemon = [];
  // jesli 1 typ dany, zmieniamy na arraya 1 elementowego
  if(typeof(pokemonTypes) === 'string'){
    pokemonTypes = [pokemonTypes]  
  }
  pokemonTypes.forEach(pokeType => {
    pokedex.forEach(pokemon => {
      if(pokemon.type.includes(pokeType)){
        fetchedPokemon.push(pokemon)
      }
    } )
  });
  res.send(fetchedPokemon)
})

app.get('/types/:lang', (req, res) => {
  const langSchema = ['english', 'chinese', 'japanese']
  const lang = req.params.lang
  let langId = langSchema.indexOf(lang)
  let fetchedTypes = []
  pokeTypes.forEach(pokeType => {
    fetchedTypes.push(Object.entries(pokeType)[langId][1])
  })
  res.send(fetchedTypes)
});

app.listen(8080);
