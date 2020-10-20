import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
