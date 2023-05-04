import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

const Flip = ({ characters }) =>{
    const [flip, setFlip] = useState(false);

return(
    <Col key= {characters.card}>
        <style type="text/css">
            {`
                #enlarge:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 26px rgba(0, 0, 0, 0, 20);
                transform: scale(1,1);
                }
                .card{
                    margin-bottom: 25px;
                    margin-top: 25px;
                }


            `}


        </style>
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            {/* side one */}
           <div className="react-card-side-one">
            <Card
            id ="enlarge"
            style = {{width: "18cm"}}
            onClick={()=> setFlip(!flip)}>
                <Card.Header>
                    <h2>{characters.name}</h2>
                </Card.Header>
                <Card.Img variant= "top" src={characters.image}/>
                <Card.Body>
                    <Card.Title>{characters.name}</Card.Title>
                    <Card.Text>
                        Gender: {characters.gender} <br/>
                        Species: {characters.species} <br/>
                        Status: {characters.status} <br/>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
                        {/* side one */}
           <div className="react-card-side-two">
            <Card
            id ="enlarge"
            style = {{width: "18cm"}}
            onClick={()=> setFlip(!flip)}>
                <Card.Header>
                    <h2>{characters.name}</h2>
                </Card.Header>
                <Card.Img variant= "top" src={characters.image}/>
                <Card.Body>
                    <Card.Title>{characters.name}</Card.Title>
                    <Card.Text>
                        Episodes: {characters.episode.length} <br/>
                        Location: {characters.location.name} <br/>
                        Origin: {characters.origin.name} <br/>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>  



        </ReactCardFlip>


    </Col>
)
 
}

export default Flip;