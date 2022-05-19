import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import UserCards from '../../components/UserCards';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const allCustomerList = [
  {
    id: 1,
    name: 'Vinayaga',
    mobile: '999999999',
    img: '',
  },
  {
    id: 2,
    name: 'Muruga',
    mobile: '88888888',
    img: '',
  },
  {
    id: 3,
    name: 'Vetri',
    mobile: '7777777',
    img: '',
  },
  {
    id: 4,
    name: 'Vinayaga',
    mobile: '999999999',
    img: '',
  },
  {
    id: 5,
    name: 'Muruga',
    mobile: '88888888',
    img: '',
  },
  {
    id: 6,
    name: 'Vetri',
    mobile: '7777777',
    img: '',
  },
  {
    id: 7,
    name: 'Vinayaga',
    mobile: '999999999',
    img: '',
  },
  {
    id: 8,
    name: 'Muruga',
    mobile: '88888888',
    img: '',
  },
  {
    id: 9,
    name: 'Vetri',
    mobile: '7777777',
    img: '',
  },
];
const Customers = () => {
  let navigate = useNavigate();
  const [searchKey, setSearchkey] = useState('');
  const [customerList, setCustomerList] = useState(allCustomerList);

  const handleChange = (e) => {
    setSearchkey(e.target.value);
    let tempList = [...allCustomerList];
    tempList = tempList.filter(
      (tl) =>
        tl.name.toUpperCase().includes(e.target.value.toUpperCase()) ||
        tl.mobile.includes(e.target.value)
    );
    setCustomerList([...tempList]);
  };
  return (
    <div style={{ margin: '10px' }}>
      <div className='flexRow justify-sb'>
        <Typography
          variant={'h5'}
          sx={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600 }}
        >
          Customers
        </Typography>
        <Button
          variant='contained'
          className='button-bg custom-button'
          startIcon={<AddCircleIcon />}
          onClick={() => {
            navigate('/addcustomer');
          }}
        >
          Add Customer
        </Button>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '10px',
          marginTop: '20px',
        }}
      >
        <TextField
          label='Search'
          id='outlined-size-small'
          size='small'
          sx={{ background: '#eae7e7' }}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ margin: '10px' }}
        >
          {customerList.map((customer, index) => {
            return (
              <Grid item xs={6} sm={4} md={2}>
                <UserCards customer={customer} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Customers;
