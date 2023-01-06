import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

export default function UsrCards(props) {
  const { customer } = props;
  let navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 200, borderRadius: '20px' }}
      className='custom-usercard'
    >
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
          sx={{ display: 'inline', width: '60%', objectFit: 'contain' }}
        />
        <CardContent sx={{ padding: '5px', background: '#f4f9ff' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ fontSize: '1em', fontWeight: 600 }}
                  >
                    Name {':'}
                  </Typography>
                </ListItemIcon>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ fontSize: '1em', fontWeight: 600 }}
                >
                  {customer.name}
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ fontSize: '1em', fontWeight: 600 }}
                  >
                    Shop Name {':'}
                  </Typography>
                </ListItemIcon>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ fontSize: '1em', fontWeight: 600 }}
                >
                  {customer.shopName}
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ fontSize: '1em', fontWeight: 600 }}
                  >
                    Mobile {':'}
                  </Typography>
                </ListItemIcon>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ fontSize: '1em', fontWeight: 600 }}
                >
                  {customer.mobile}
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
