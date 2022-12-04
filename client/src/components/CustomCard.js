import React from 'react'
import Card from 'react-bootstrap/Card';
import {CardActionArea } from '@mui/material';
import './CustomCard.css';


function CustomCard(props) {
  return (
    <div className='sizechange'>
    <Card>
      <CardActionArea>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </CardActionArea>
    </Card>
  </div>
  )
  
}

export default CustomCard