import { useEffect, useState } from "react";
import { Card, CardText, CardTitle, CardImg, CardBody, CardSubtitle, ListGroup, ListGroupItem } from "react-bootstrap";
import ky from "ky";

function SinglePokemonDisplay({pokemon}){
    const imgSrc = "http://localhost:8080/image/" + fillPokemonId(pokemon.id)
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
        <Card class="pokemonCard">
            <CardImg src={imgSrc} variant="top"/>
            <CardBody>
                <CardTitle>{pokemon.name.english}</CardTitle>
                <CardText>
                    Typy: {getTypeList(pokemon.type)}
                </CardText>
                <CardSubtitle>
                        <ListGroup>
                        {Object.entries(pokemon.base).map((stat, index) => (
                            <ListGroupItem key={index}>{stat[0]}: {stat[1]}</ListGroupItem>
                        ))}
                        </ListGroup>
                </CardSubtitle>

            </CardBody>
        </Card>
    )
}

export default SinglePokemonDisplay