// React
import React, { useState } from 'react';

// React router
import { Link } from 'react-router-dom';

// M-U Components
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
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
}));

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const onChangeHandler = (e, value) => {
    setValue(value);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar>
            <Typography variant='h4'>Alugue na HORA</Typography>
            <Tabs
              value={value}
              onChange={onChangeHandler}
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
              <Tab
                className={classes.tab}
                component={Link}
                to='/quem-somos'
                label='Quem somos'
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMagin} />
    </>
  );
};
export default Header;
