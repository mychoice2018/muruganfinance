import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UsrCards(props) {
  const { customer } = props;
  let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }} className='custom-usercard'>
      <CardActionArea
        onClick={() => {
          navigate(`/customer/${customer._id}`);
        }}
      >
        <CardMedia
          component='img'
          height='140'
          image={
            customer.gender === 'F' ? '../img/female.png' : '../img/male.png'
          }
          alt='green iguana'
          sx={{ display: 'inline', width: '75%' }}
        />
        <CardContent sx={{ padding: '5px' }}>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ fontSize: '1em', fontWeight: 600 }}
          >
            {customer.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ fontSize: '0.875em' }}
          >
            {customer.mobile}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
