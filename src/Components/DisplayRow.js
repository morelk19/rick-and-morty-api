
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import Flip from "./Flip"

const DisplayRow= (props) =>{
    const [characters, setCharacters]= useState([]);
    // setCharacters(props.characters);
    return(
        <div>
            <Container>
                {JSON.stringify(characters)}
                {/* <Row>
                    {props.data.map((characters)=> {
                        return <Flip characters= {characters} />;
                    })}
                </Row> */}
            </Container>
        </div>
    )
}

export default DisplayRow;

