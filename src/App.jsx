// React, Router
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Material UI
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';

// Firebase Auth

// Components
import Header from './components/header/Header';
import SignIn from './components/singn-in/SignIn';
import Home from './pages/homepage/Home';
import HousesToRent from './components/houses-to-rent/HousesToRent';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import AnnounceToRent from './components/owners/AnnounceToRent';
import MyHouses from './components/owners/MyHouses';
import Footer from './components/footer/Footer';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

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
          <Route exact path='/' component={() => <Home />} />
          <Route
            path='/imoveis-para-alugar'
            component={() => <HousesToRent />}
          />
          <Route path='/quem-somos' component={() => <About />} />
          <Route path='/contato' component={() => <Contact />} />
          <Route
            path='/anunciar-para-alugar'
            component={() => <AnnounceToRent />}
          />
          <Route path='/meus-imoveis' component={() => <MyHouses />} />
          <Route path='/contato' component={() => <Contact />} />
          <Route path='/signin' component={() => <SignIn />} />
          <Route path='/cliente' component={() => <MyHouses />} />
          <Route path='/user'>User...</Route>
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
