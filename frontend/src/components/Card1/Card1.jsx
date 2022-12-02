import * as React from 'react';
import Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';

function Card1() {
  return (
  
    /*1*/
    <div className='card1'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/banquet.png"
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
    
    
    /*2 */
  );
}
export default Card1

