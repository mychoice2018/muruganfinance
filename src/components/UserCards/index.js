import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function UsrCards(props) {
  const { customer } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className='custom-usercard'>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='https://sriit.ac.in/tool/plugins/images/users/4.jpg'
          alt='green iguana'
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
