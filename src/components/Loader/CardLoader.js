import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function CardLoader(props) {
  return (
    <Grid item xs={6} sm={4} md={2}>
      {[...Array(15)].map((item, index) => (
        <Box key={index} sx={{my: 2}}>
          <Skeleton variant="rectangular" height={118} />
        </Box>
      ))}
    </Grid>
  );
}
