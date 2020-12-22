// React, Router, Redux
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import HousesToRent from '../components/houses-to-rent/HousesToRent';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import AnnounceToRent from '../components/owners/AnnounceToRent';
import MyHouses from '../components/owners/MyHouses';
import AuthRouter from '../routers/AuthRouter';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HomePage from '../pages/homepage/HomePage';

// Material UI
import { ThemeProvider, Typography, Grid } from '@material-ui/core';
import theme from '../components/ui/Theme';
import PrivateRoute from '../routers/privateRoute';
import PublicRoute from '../routers/publicRouter';

import { login } from '../actions/auth';

// Firebase
import { firebase } from '../components/firebase/firebase.utils';

export const AppRouter = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <Grid container justify='center'>
        <Typography variant='h4'>Loading...</Typography>
      </Grid>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route path='/auth' component={AuthRouter} />
          <PublicRoute
            isAuthenticated={isLoggedIn}
            exact
            path='/'
            component={HomePage}
          />
          <PublicRoute
            isAuthenticated={isLoggedIn}
            exact
            path='/aluguenahora'
            component={HomePage}
          />
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path='/imoveis-para-alugar'
            component={HousesToRent}
          />
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path='/quem-somos'
            component={About}
          />
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path='/contato'
            component={Contact}
          />
          <PrivateRoute
            isAuthenticated={isLoggedIn}
            path='/anunciar-para-alugar'
            component={AnnounceToRent}
          />
          <PrivateRoute
            path='/meus-imoveis'
            component={MyHouses}
            isAuthenticated={isLoggedIn}
          />
          <Route path='/contato' component={Contact} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Router>
    </ThemeProvider>
  );
};
