// React
import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

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
  useScrollTrigger,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// Logo from assets
import logo from '../../assets/aluguenahora.logo.svg';

import { startLogout } from '../../actions/auth';
import { login } from '../../actions/auth';

// Firebase
import { firebase } from '../firebase/firebase.utils';

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
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginRight: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  logoContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    height: '2.7em',
    marginBottom: '0.5em',
    marginLeft: '1.5em',
    [theme.breakpoints.down('xs')]: {
      height: '2em',
    },
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
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
    [theme.breakpoints.down('md')]: {
      height: '30px',
      width: '30',
    },
    [theme.breakpoints.down('xs')]: {
      height: '25px',
      width: '25',
    },
  },

  drawerItems: {
    ...theme.typography.tab,
    fontSize: 14,
    opacity: 0.6,
  },
  drawerItemSelected: {
    opacity: 1.1,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: '#ffffff',
  },
  toolbar: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'start',
    },
  },
  accountButtom: {
    marginRight: '1.5em',
    borderRadius: '5em',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Dispatch Redux
  const dispatch = useDispatch();

  // Use states Hooks
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler Functions
  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const menuOptions = [
    {
      name: 'Para proprietários',
      link: '/para-proprietarios',
      activeIndex: 2,
      selectedIndex: 0,
    },
    {
      name: 'Anunciar imóvel para alugar',
      link: '/anunciar-para-alugar',
      activeIndex: 2,
      selectedIndex: 1,
    },
    {
      name: 'Meus Imóveis',
      link: '/meus-imoveis',
      activeIndex: 2,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: 'Home', link: '/aluguenahora', activeIndex: 0 },
    {
      name: 'Imóveis para alugar',
      link: '/imoveis-para-alugar',
      activeIndex: 1,
    },

    {
      name: 'Para proprietarios',
      link: '/para-proprietarios',
      activeIndex: 2,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'Quem somos', link: '/quem-somos', activeIndex: 3 },
    { name: 'Contate nos', link: '/contato', activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch, setIsLoggedIn]);

  const tabs = (
    <>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose(true);
            }}
            selected={i === props.selectedIndex && props.value === 1}
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
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItems} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar disableGutters className={classes.toolbar}>
            <Hidden lgUp>
              <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
              >
                <MenuIcon className={classes.drawerIcon} />
              </IconButton>
            </Hidden>
            <Button
              component={Link}
              to='/aluguenahora'
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
            >
              <img alt='logo marca' src={logo} className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
            <Hidden xsDown>
              <Link to='/auth/login' style={{ textDecoration: 'none' }}>
                {isLoggedIn ? (
                  <Button
                    variant='contained'
                    color='default'
                    className={classes.accountButtom}
                    startIcon={<AccountCircleIcon />}
                    onClick={handleLogout}
                  >
                    Sair sessão
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    color='default'
                    className={classes.accountButtom}
                    startIcon={<AccountCircleIcon />}
                  >
                    Area cliente
                  </Button>
                )}
              </Link>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <Divider />
    </>
  );
};
export default Header;
