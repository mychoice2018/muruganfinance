import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UserCards from '../../components/UserCards';

const Customers = () => {
  const customerList = [
    {
      name: 'Vinayaga',
      mobile: '999999999',
      img: '',
    },
    {
      name: 'Muruga',
      mobile: '88888888',
      img: '',
    },
    {
      name: 'Vetri',
      mobile: '7777777',
      img: '',
    },
    {
      name: 'Vinayaga',
      mobile: '999999999',
      img: '',
    },
    {
      name: 'Muruga',
      mobile: '88888888',
      img: '',
    },
    {
      name: 'Vetri',
      mobile: '7777777',
      img: '',
    },
  ];
  return (
    <div style={{ margin: '10px' }}>
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
