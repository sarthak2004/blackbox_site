import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';

 function Card3() {
  return (
  
    /*1*/
    <div className='card3'>
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
              CATERING
            </Typography>
            <Typography variant="body2" color="text.secondary">
              DELICIOUS COUSINE
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    </div>
    
    
    /*2 */
  );
}
export default Card3

