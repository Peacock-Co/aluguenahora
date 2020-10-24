import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './components/ui/Theme';

import Header from './components/header/Header';
import Home from './components/home-page/Home';
import HousesToRent from './components/houses/HousesToRent';
import HousesToBuy from './components/houses/HousesToBuy';
import About from './components/about/About';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route
            exact
            path='/imoveis-para-alugar'
            component={() => <HousesToRent />}
          />
          <Route
            exact
            path='/imoveis-para-comprar'
            component={() => <HousesToBuy />}
          />
          <Route exact path='/quem-somos' component={() => <About />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
