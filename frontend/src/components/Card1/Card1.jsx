import * as React from 'react';
// import Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1({ image, text } ) {
  return (
    // <Link to='/example'>
    //   <div className='card1'>
        
    //     <Card sx={{ maxWidth: 430 }}>
        
    //       <CardActionArea>
          
    //         <CardMedia
    //           component="img"
    //           image={image}
    //           alt="CardMedia Image Example"
    //           height="auto"
    //           title="CardMedia Image Example"

              
              
    //         />
    //         <CardContent>
            
    //           <Typography variant="h5" component="div">
    //             {text} 
    //           </Typography>
    //           <Typography variant="body5" color="text.secondary">
    //             PREMIUM LOCATIONS
    //           </Typography>
              
    //         </CardContent>
            
    //       </CardActionArea>
            
    //     </Card>
        
    //   </div>
    // </Link>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
}

export default Card1

