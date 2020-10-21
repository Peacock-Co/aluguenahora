import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact from='/' render={(props) => <Home {...props} />} />
          <Route
            exact
            from='/contact'
            render={(props) => <Contact {...props} />}
          />
          <Route exact from='/about' render={(props) => <About {...props} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
