import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BottomNavigation from '../bottomNavigation';
import Drawer from '../drawer';

export default function Layout(props) {
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' className='customHeader'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setIsOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Murugan Finance
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        isOpenDrawer={isOpenDrawer}
        toggleOpenDrawer={() => {
          setIsOpenDrawer(false);
        }}
      />
      {props.children}
      <BottomNavigation></BottomNavigation>
    </Box>
  );
}
