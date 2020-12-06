import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA79cJIiu3En1dHAPg3wGWBZF_qfs6DRMw',
  authDomain: 'alugue-na-hora-a427b.firebaseapp.com',
  databaseURL: 'https://alugue-na-hora-a427b.firebaseio.com',
  projectId: 'alugue-na-hora-a427b',
  storageBucket: 'alugue-na-hora-a427b.appspot.com',
  messagingSenderId: '825237480393',
  appId: '1:825237480393:web:455014ad2e22c305dcbe18',
};

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

const provider = new app.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { db, auth };
