import {
  firebase,
  googleAuthProvider,
} from '../components/firebase/firebase.utils';
import { types } from '../types/types';
import { startLoading, finishLoading } from './Ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(finishLoading());
      });
  };
};

export const startRegisterWithNameEmailPassword = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        console.log(user);

        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Firebase SignIn with Google
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

// Firebase Login
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

// Firebase Logout
export const startLogout = () => {
  return async (dispath) => {
    await firebase.auth().signOut();
    dispath(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
