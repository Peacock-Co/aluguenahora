// React
import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

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
  IconButton,
  useScrollTrigger,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Hidden,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarBorder from '@material-ui/icons/StarBorder';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';

// Logo from assets
import logo from '../../assets/pics/aluguenahora.logo.svg';

import { startLogout } from '../../actions/Auth';
import { login } from '../../actions/Auth';

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
    width: '20rem',
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

  menu: {
    zIndex: 1302,
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
    nested: {
      paddingLeft: theme.spacing(4),
    },
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

  logoutButton: {
    marginRight: '1.5em',
    borderRadius: '5em',
    backgroundColor: 'transparent',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Dispatch Redux
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  // Use states Hooks
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(true);

  // Handler Functions
  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
    setOpen(!open);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const routes = [
    { name: 'Home', link: '/aluguenahora', activeIndex: 0 },
    {
      name: 'Imóveis para alugar',
      link: '/imoveis-para-alugar',
      activeIndex: 1,
    },

    {
      name: 'Meus Imóveis',
      link: '/meus-anuncios',
      activeIndex: 2,
    },
    { name: 'Quem somos', link: '/quem-somos', activeIndex: 3 },
    { name: 'Contate nos', link: '/contato', activeIndex: 4 },
  ];

  useEffect(() => {
    [...routes].forEach((route) => {
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
  }, [props.value, props.selectedIndex, routes, props]);

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
            onMouseLeave={() => setOpenMenu(false)}
            onClick={handleClick}
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
      ></Menu>
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
          <ListItem
            component={Link}
            to={'/imoveis-para-alugar'}
            button
            activeindex='1'
            name='Imoveis para alugar'
            className={classes.drawerItems}
          >
            <ListItemIcon>
              <HomeTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary='Imóveis para aluguar' />
          </ListItem>

          <ListItem
            button
            className={classes.drawerItems}
            name='Meus imóvies'
            component={Link}
            to={'/meus-anuncios'}
            activeindex='2'
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Meus imóvies' />
          </ListItem>

          <ListItem
            button
            activeindex='3'
            className={classes.drawerItems}
            name='Quem somos'
            component={Link}
            to={'/quem-somos'}
          >
            <ListItemIcon>
              <ContactSupportTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary='Quem somos' />
          </ListItem>
          <ListItem
            button
            activeindex='4'
            className={classes.drawerItems}
            name='Contate nos'
            component={Link}
            to={'/contato'}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='Contate nos' />
          </ListItem>
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
              <Link
                to='/auth/login'
                style={{ textDecoration: 'none', marginLeft: 'auto' }}
              >
                {isLoggedIn ? (
                  <>
                    <Button
                      variant='contained'
                      color='default'
                      className={classes.accountButtom}
                      startIcon={<AccountCircleIcon />}
                    >
                      {name}
                    </Button>

                    <Button
                      color='default'
                      onClick={handleLogout}
                      variant='contained'
                      className={classes.logoutButton}
                    >
                      Sair
                    </Button>
                  </>
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
