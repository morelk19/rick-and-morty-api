import './App.css';
import React, { useEffect, useState } from 'react';
import Pagination from './Components/Pagination';
import { Container, Row } from "react-bootstrap";
import Flip from './Components/Flip';




function App() {
    //Make hook for characters into state
    const [characters, setCharacters] = useState([]);


return(
    <div className='content'>
      <Pagination characters={characters} setCharacters={setCharacters} />
      <Container>
                <Row>
                    {characters.map((character)=> {
                        return <Flip characters= {character} />;
                    })}
                </Row>
            </Container>
      
    </div>

  )
    
}

export default App;