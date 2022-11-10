import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="200"
        alignContent= "center"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlS6rSm_1TBsHslnwpOEZkt57vWs9EgN_MIg&usqp=CAU"
      />
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="350"
        alignContent= "right"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBPGKsQ_7-9bbeb5GPSff_hFHJEYSwUXKNA&usqp=CAU
        "
      />
     <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      
    </Card>


  );
}
