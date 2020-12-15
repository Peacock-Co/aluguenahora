// React, Router, Redux
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Material UI
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';

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
import { store } from './store/Store';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Home />
          <Switch>
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
      </Provider>
    </ThemeProvider>
  );
};

export default App;
