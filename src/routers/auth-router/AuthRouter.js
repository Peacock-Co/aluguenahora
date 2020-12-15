import React, { useEffect } from 'react';

// Router
import { Switch, Route, Redirect } from 'react-router-dom';

// Firebase
import { firebase } from '../../components/firebase/firebase.utils';

import LoginScreen from '../../components/auth/login/LoginScreen';
import RegisterScreen from '../../components/auth/register/RegisterScreen';

const AuthRouter = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path='/auth/login' component={LoginScreen} />
        <Route exact path='/auth/register' component={RegisterScreen} />
        <Redirect to='/auth/login' />
      </Switch>
    </div>
  );
};

export default AuthRouter;
