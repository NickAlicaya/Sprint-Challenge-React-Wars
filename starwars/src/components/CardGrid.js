import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from'./CharCard';
import { Container, Row, Col } from 'reactstrap';

function CardGrid () {
const [chars, setChars] = useState([])
useEffect(() => {
    axios
        .get('https://swapi.co/api/people/')
        .then(response => {
        console.log(response.data.results);
        setChars(response.data.results);
            })
        .catch(error=>{
        console.log('NO STARWARS DATA', error)
            })
        },[]);
    
        return (
            <>
            <Container>
                <Row>
                 <Col md='4'>
                    {chars.map((char,index) => {
                    return( 
                    <CharCard 
                    key={index}
                    name={char.name} 
                    gender={char.gender}
                    mass={char.mass}
                    height={char.height}
                    hair_color={char.hair_color}
                    homeworld={char.homeworld}
                    />
                    )}
                )}
                </Col>
               </Row>
            </Container>
            </>
        );
    };
    
    export default CardGrid
