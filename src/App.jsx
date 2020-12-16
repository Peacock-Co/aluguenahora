// React, Router, Redux
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Material UI
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';

// Firebase
import { firebase } from './components/firebase/firebase.utils';

// Components
import Header from './components/header/Header';
import Home from './pages/homepage/Home';
import HousesToRent from './components/houses-to-rent/HousesToRent';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import AnnounceToRent from './components/owners/AnnounceToRent';
import MyHouses from './components/owners/MyHouses';
import Footer from './components/footer/Footer';
import AuthRouter from './routers/auth-router/AuthRouter';

import RegisterScreen from './components/auth/register/RegisterScreen';
import LoginScreen from './components/auth/login/LoginScreen';
import { login } from './actions/Auth';
import { Grid, Typography } from '@material-ui/core';

const App = () => {
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
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={AuthRouter} />
          <Route path='/imoveis-para-alugar' component={HousesToRent} />
          <Route path='/quem-somos' component={About} />
          <Route path='/contato' component={Contact} />
          <Route path='/anunciar-para-alugar' component={AnnounceToRent} />
          <Route path='/meus-imoveis' component={MyHouses} />
          <Route path='/contato' component={Contact} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
