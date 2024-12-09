import { Row, Col, Container } from 'react-bootstrap';
import SinglePokemonDisplay from './SinglePokemonDisplay';

function PokemonList({fetchedPokemon}) {
    return (
        <Container fluid>
            <Row className="g-3">
                {fetchedPokemon.map((pokemon, index) => (
                    <Col xs={8} sm={5} md={3} lg={2} key={index}>
                        <SinglePokemonDisplay pokemon={pokemon} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PokemonList;