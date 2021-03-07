import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import './styles.css'; 


const Posts = ({ posts }) => {

  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
      axios.post('http://localhost:3333/digimons',{
        digimons:digimons
      }).then((response) => {
        setDigimons(response.data);
      })
       
  }, []); 

    return(
        <div className="container">
          {posts.map((digimons) => (
           <Card style={{ width: '18rem' }} key={digimons.id}>
               <Card.Img variant="top" src={digimons.img} />
                  <Card.Body>
                    <Card.Title>Nome: {digimons.name}</Card.Title>
                  </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Level: {digimons.level}</ListGroupItem>
                </ListGroup>
              </Card>
               ))}
      </div>
    );
} 

export default Posts;