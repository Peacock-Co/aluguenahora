// React
import React, { useState, useEffect } from 'react';

// React router
import { Link } from 'react-router-dom';

// M-U Components
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  useScrollTrigger,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// useSytyles hooks
const useStyles = makeStyles((theme) => ({
  toolbarMagin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('md')]: {},
  },
  menuItem: {
    ...theme.typography.tab,
    fontSize: 14,
    opacity: 0.6,
    '&:hover': {
      opacity: 1.1,
    },
  },
  drawerIconContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    marginLeft: 'auto',
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
  },
  drawer: {
    backgroundColor: theme.palette.common.algBlue,
  },
  drawerItems: {
    ...theme.typography.tab,
    fontSize: 14,
    opacity: 0.6,
  },
  drawerItemSelected: {
    opacity: 1.1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Use states Hooks
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Handler Functions
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      name: 'Para proprietários',
      link: '/para-proprietarios',
      activeIndex: 3,
      selectedIndex: 0,
    },
    {
      name: 'Anunciar imóvel para alugar',
      link: '/anunciar-para-alugar',
      activeIndex: 3,
      selectedIndex: 1,
    },
    {
      name: 'Anunciar imóvel para vender',
      link: '/anunciar-para-vender',
      activeIndex: 3,
      selectedIndex: 2,
    },
    {
      name: 'Meus Imóveis',
      link: '/meus-imoveis',
      activeIndex: 3,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Imóveis para alugar',
      link: '/imoveis-para-alugar',
      activeIndex: 1,
    },
    {
      name: 'Imóveis para comprar',
      link: '/imoveis-para-comprar',
      activeIndex: 2,
    },
    { name: 'Para proprietarios', link: '/para-proprietarios', activeIndex: 3 },
    { name: 'Quem somos', link: '/quem-somos', activeIndex: 4 },
    { name: 'Contate nos', link: '/contato', activeIndex: 5 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        <Tab className={classes.tab} component={Link} to='/' label='Home' />
        <Tab
          className={classes.tab}
          component={Link}
          to='/imoveis-para-alugar'
          label='Imóveis para alugar'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/imoveis-para-comprar'
          label='Imóveis para comprar'
        />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to='/para-proprietarios'
          label='Para proprietários'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/quem-somos'
          label='Quem somos'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/contato'
          label='Contate nos'
        />
      </Tabs>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose(true);
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to='/'
            selected={value === 0}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItems, classes.drawerItemSelected]
                  : classes.drawerItems
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to='/imoveis-para-alugar'
            selected={value === 1}
          >
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItems, classes.drawerItemSelected]
                  : classes.drawerItems
              }
              disableTypography
            >
              Imóveis para alugar
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to='/imoveis-para-comprar'
            selected={value === 2}
          >
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItems, classes.drawerItemSelected]
                  : classes.drawerItems
              }
              disableTypography
            >
              Imóveis para comprar
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to='/para-proprietarios'
            selected={value === 3}
          >
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItems, classes.drawerItemSelected]
                  : classes.drawerItems
              }
              disableTypography
            >
              Para proprietários
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to='/quem-somos'
            selected={value === 4}
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItems, classes.drawerItemSelected]
                  : classes.drawerItems
              }
              disableTypography
            >
              Quem somos
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to='/contato'
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 5
                  ? [classes.drawerItems, classes.drawerItemSelected]
                  : classes.drawerItems
              }
              disableTypography
            >
              Contate nos
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar>
            <Button
              component={Link}
              to='/'
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <Typography variant='h5'>
                Alugue na HORA <i className='far fa-clock'></i>
              </Typography>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMagin} />
    </>
  );
};
export default Header;
