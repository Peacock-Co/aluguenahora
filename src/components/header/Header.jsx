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
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';

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
  },
  menuItem: {
    ...theme.typography.tab,
    fontSize: 14,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();

  // Use states Hooks
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handler Functions
  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (
      window.location.pathname === '/imoveis-para-alugar' &&
      value !== 1
    ) {
      setValue(1);
    } else if (
      window.location.pathname === '/imoveis-para-comprar' &&
      value !== 2
    ) {
      setValue(2);
    } else if (
      window.location.pathname === '/para-proprietarios' &&
      value !== 3
    ) {
      setValue(3);
    } else if (window.location.pathname === '/quem-somos' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/contato' && value !== 5) {
      setValue(5);
    }
  }, [value]);

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
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor='primary'
            >
              <Tab
                className={classes.tab}
                component={Link}
                to='/'
                label='Home'
              />
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Tab
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup={anchorEl ? 'true' : undefined}
                  className={classes.tab}
                  component={Link}
                  onMouseOver={(event) => handleClick(event)}
                  to='/para-proprietarios'
                  label='Para proprietários'
                />
                <ExpandMoreIcon />
              </div>

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

            {/* Menu items */}

            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(3);
                }}
                component={Link}
                to='/anunciar-para-alugar'
                classes={{ root: classes.menuItem }}
              >
                Anunciar imóvel para alugar
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(3);
                }}
                component={Link}
                to='/anunciar-para-vender'
                classes={{ root: classes.menuItem }}
              >
                Anunciar imóvel para vender
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(3);
                }}
                component={Link}
                to='/meus-imoveis'
                classes={{ root: classes.menuItem }}
              >
                Meus imóvies
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMagin} />
    </>
  );
};
export default Header;
