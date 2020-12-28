// React
import React from 'react';

// Material
import { Grid, Typography } from '@material-ui/core';

const MyHouses = () => {
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

export default MyHouses;
