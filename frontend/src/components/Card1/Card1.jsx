import * as React from 'react';
import Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function Card1({ image, text } ) {
  return (
    <Link to='/example'>
      <div className='card1'>
        
        <Card sx={{ maxWidth: 430 }}>
        
          <CardActionArea>
          
            <CardMedia
              component="img"
              image={image}
              alt="CardMedia Image Example"
              height="auto"
              title="CardMedia Image Example"

              
              
            />
            <CardContent>
            
              <Typography variant="h5" component="div">
                {text} 
              </Typography>
              <Typography variant="body5" color="text.secondary">
                PREMIUM LOCATIONS
              </Typography>
              
            </CardContent>
            
          </CardActionArea>
            
        </Card>
        
      </div>
    </Link>
  );
}
export default Card1

