import React from 'react'
import Card from 'react-bootstrap/Card';
import {CardActionArea } from '@mui/material';
import './CustomCard.css';
import { Link } from 'react-router-dom';

function CustomCard(props) {
  return (
    <div className='sizechange'>
      <Link to={props.linkTo}>
        <Card>
          <CardActionArea>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            </Card.Body>
          </CardActionArea>
        </Card>
      </Link>
  </div>
  )
  
}

export default CustomCard