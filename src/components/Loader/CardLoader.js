import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function CardLoader(props) {
  return (
    <Grid container>
      {[...Array(15)].map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 2 }}>
          <Skeleton variant='rectangular' width={210} height={118} />
        </Box>
      ))}
    </Grid>
  );
}
