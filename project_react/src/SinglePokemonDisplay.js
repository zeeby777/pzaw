import { Image } from "react-bootstrap";

function SinglePokemonDisplay({pokemon}){
    console.log(pokemon)
    function getTypeList(types){
        let typesString = ""
        types.forEach(type => {
            typesString += type + ", "
        });
        typesString = typesString.slice(0, -2)
        return typesString
    }
    function fillPokemonId(id){
        let idString = new String(id)
        let charsToAdd = 3 - idString.length
        if(charsToAdd == 2){
            idString = "00" + idString
        }
        if(charsToAdd == 1){
            idString = "0" + idString
        }
        return idString
    }

    return(
        <div className="singlePokemonDisplay">
            <p>Nazwa: {pokemon.name.english}</p>
            <p>Typy: {getTypeList(pokemon.type)}</p>
            <p>Staty: </p>
            <ul>
                {Object.entries(pokemon.base).map((stat, index) => (
                    <li key={index}>{stat[0]}: {stat[1]}</li>
                ))}
            </ul>
        </div>
    )
}

export default SinglePokemonDisplay