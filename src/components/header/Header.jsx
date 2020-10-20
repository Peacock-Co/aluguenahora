// React
import React, { useState } from 'react';

// MU Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core';

// MU Icons
import {
  Menu as MenuIcon,
  HomeWorkOutlined,
  Home as HomeIcon,
  HelpOutlineOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((style: theme) => ({
  list: {
    width: '15rem',
  },
}));

const Header = () => {
  // Styles
  const classes = useStyles();

  // state
  const [drawerOpen, setDrawerOpen] = useState(true);

  //functions
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = [
    { text: 'Alugue na Hora', icon: <HomeIcon /> },
    { text: 'Imóveis para Alugar', icon: <HomeWorkOutlined /> },
    { text: 'Quem somos', icon: <HelpOutlineOutlined /> },
  ];
  return (
    <div>
      <AppBar position='sticky' color='primary'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link href='/' variant='h6' color='inherit' underline='none'>
              Alugue na HORA <i className='fas fa-clock'></i>
            </Link>
          </Typography>
          <Box flexGrow={1} />

          <IconButton color='inherit' onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer
          anchor='right'
          variant='temporary'
          onClose={toggleDrawer}
          open={!drawerOpen}
        >
          <List className={classes.list}>
            {drawerItems.map((prop) => (
              <ListItem onClick={toggleDrawer} button key={prop.text}>
                <ListItemIcon>{prop.icon}</ListItemIcon>
                <ListItemText>{prop.text}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </div>
  );
};
export default Header;
