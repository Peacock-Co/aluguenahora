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
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      style={{ height: '35em' }}
    >
      <Grid item>
        <Typography variant='h3'>
          Ainda não há inserido nenhum imóvel
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withRouter(MyHouses);
