// React
import React, { useEffect, useState } from 'react';

// React router
import { withRouter } from 'react-router-dom';

// Material
import { Grid, Typography } from '@material-ui/core';

// Firebase
import { auth } from '../firebase/firebase.utils';

const MyHouses = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      console.log('existe usuario');
      setUser(auth.currentUser);
    } else {
      console.log('nao existe usuario');
      props.history.push('/signin');
    }
  }, [props.history]);
  return (
    <Grid container justify='center'>
      <Typography variant='h3'>Meus Imóveis!!</Typography>
    </Grid>
  );
};

export default withRouter(MyHouses);
