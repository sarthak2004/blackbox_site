import React from 'react'
import Card from 'react-bootstrap/Card';

function CustomCard(props) {
  return (
    <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        </Card.Body>
    </Card>
  )
}

export default CustomCard