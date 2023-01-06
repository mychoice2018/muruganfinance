import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function TableLoader(props) {
  return (
    <Grid container sx={{ padding: '20px' }}>
      {[...Array(8)].map((item, index) => (
        <Skeleton sx={{ width: '100%', height: '42px' }} />
      ))}
    </Grid>
  );
}
