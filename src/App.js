import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './components/ui/Theme';

import Header from './components/header/Header';
import Home from './components/home-page/Home';
import HousesToRent from './components/houses-to-rent-to-buy/HousesToRent';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import HousesToBuy from './components/houses-to-rent-to-buy/HousesToBuy';
import AnnounceToRent from './components/owners/AnnounceToRent';
import AnnounceToSell from './components/owners/AnnounceToSell';
import MyHouses from './components/owners/MyHouses';

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
          <Route exact path='/contato' component={() => <Contact />} />
          <Route
            exact
            path='/anunciar-para-alugar'
            component={() => <AnnounceToRent />}
          />
          <Route
            exact
            path='/anunciar-para-vender'
            component={() => <AnnounceToSell />}
          />
          <Route exact path='/meus-imoveis' component={() => <MyHouses />} />
          <Route exact path='/contato' component={() => <Contact />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
