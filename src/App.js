import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact from='/' render={(props) => <Home {...props} />} />
        <Route
          exact
          path='/contact'
          render={(props) => <Contact {...props} />}
        />
        <Route exact path='/about' render={(props) => <About {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
