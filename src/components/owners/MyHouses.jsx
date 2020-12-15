// React
import React from 'react';

// React router
import { withRouter } from 'react-router-dom';

// Material
import { Grid, Typography } from '@material-ui/core';

// Firebase
//import { auth } from '../firebase/firebase.utils';

const MyHouses = (props) => {
  return (
    <Grid container justify='center'>
      <Typography variant='h3'>Meus Imóveis!!</Typography>
    </Grid>
  );
};

export default withRouter(MyHouses);
