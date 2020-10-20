import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router>
          <Switch>
            <Route exact from='/' render={(props) => <Home {...props} />} />
            <Route
              exact
              path='/contact'
              render={(props) => <Contact {...props} />}
            />
            <Route
              exact
              path='/about'
              render={(props) => <About {...props} />}
            />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
};

export default App;
