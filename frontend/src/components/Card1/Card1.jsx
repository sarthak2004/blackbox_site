import * as React from 'react';
import Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import banquet from '../../images/banquet.png'
import { Link } from 'react-router-dom';

function Card1() {
  return (
    <Link to='/example'>
      <div className='card1'>
        
        <Card sx={{ maxWidth: 345 }}>
        
          <CardActionArea>
          
            <CardMedia
              component="img"
              image={banquet}
              alt="CardMedia Image Example"
              height="auto"
              title="CardMedia Image Example"

              
              
            />
            <CardContent>
            
              <Typography gutterBottom variant="h5" component="div">
                BANQUET HALL
              </Typography>
              <Typography variant="body2" color="text.secondary">
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

