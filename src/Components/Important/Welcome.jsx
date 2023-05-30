import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 1045 }} style={{margin:"20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          width="450"
          image="images/7.png"
          alt="green iguana"
          style={{borderRadius:"50px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="text-center" style={{color:"red",fontWeight:"bold",fontSize:"40px"}}>
          Welcome To Learning Plat Form
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontWeight:"bold",fontSize:"30px"}}>
          Remember, practice and hands-on experience are key to becoming a proficient frontend developer. Start building projects, experiment with different technologies, and gradually expand your skill set. Good luck on your frontend development journey!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}