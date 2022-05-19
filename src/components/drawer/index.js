import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';

export default function LeftDrawer(props) {
  const { isOpenDrawer, toggleOpenDrawer } = props;
  const [state, setState] = React.useState(false);
  let navigate = useNavigate();

  const toggleDrawer = (open) => {
    setState(open);
    toggleOpenDrawer();
  };

  React.useEffect(() => {
    isOpenDrawer && setState(isOpenDrawer);
  }, [isOpenDrawer]);

  const list = () => (
    <Box
      role='presentation'
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
      sx={{ width: '200px' }}
    >
      <List>
        <ListItem
          button
          key={'Home'}
          onClick={() => {
            navigate('/');
          }}
        >
          <ListItemIcon sx={{ minWidth: '30px' }}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>

        <ListItem
          button
          key={'Customers'}
          onClick={() => {
            navigate('/customers');
          }}
        >
          <ListItemIcon sx={{ minWidth: '30px' }}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Customers'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Drawer
          anchor={'left'}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
