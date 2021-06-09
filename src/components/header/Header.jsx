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
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  Paper,
  ListItemIcon,
  Collapse,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import DraftsIcon from '@material-ui/icons/Drafts';
import CardMembershipTwoToneIcon from '@material-ui/icons/CardMembershipTwoTone';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
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
    width: '18rem',
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

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const menuOptions = [
    {
      name: 'Meus Imóveis',
      link: '/meus-anuncios',
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
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        placement='bottom-start'
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'top-left',
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => setOpenMenu(true)}
                  autoFocusItem={false}
                  id='simple-menu'
                  onKeyDown={handleListKeyDown}
                  onMouseLeave={handleClose}
                  disablePadding
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
                      selected={
                        i === props.selectedIndex &&
                        props.value === 1 &&
                        window.location.pathname !== '/meus-imoveis'
                      }
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ zIndex: 1302 }}
        keepMounted
      ></Menu> */}
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
          <Link to={'/imoveis-para-alugar'}>
            <ListItem
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
          </Link>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <CardMembershipTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary='Para proprietários' />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Meus imóvies' />
              </ListItem>
            </List>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <PublishTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary='Anunciar para alugar' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <ContactSupportTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary='Quem somos' />
          </ListItem>
          <ListItem button>
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
              <Link to='/auth/login' style={{ textDecoration: 'none' }}>
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
