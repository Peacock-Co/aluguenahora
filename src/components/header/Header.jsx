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
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Use states Hooks
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

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
    {
      name: 'Para proprietarios',
      link: '/para-proprietarios',
      activeIndex: 3,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'Quem somos', link: '/quem-somos', activeIndex: 4 },
    { name: 'Contate nos', link: '/contato', activeIndex: 5 },
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
        <div className={classes.toolbarMagin} />
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
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar>
            <Button
              component={Link}
              to='/'
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
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
