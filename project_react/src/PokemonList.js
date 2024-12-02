import SinglePokemonDisplay from "./SinglePokemonDisplay"

function PokemonList({fetchedPokemon}){
    return(
       <div className="pokemonList">
        {fetchedPokemon.map((pokemon, index) => (
            <SinglePokemonDisplay pokemon={pokemon} key={index} />
        ))}
       </div> 
    )
}

export default PokemonList