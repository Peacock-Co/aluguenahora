import React from 'react';

//Material UI
import { Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

//Styles
const useStyles = makeStyles((theme) => ({
  h3: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.4rem',
    },
  },
  h2: {},
  mainContainer: {
    height: '35em',
    [theme.breakpoints.down('md')]: {
      height: '33em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20em',
      marginTop: '5em',
    },
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid container className={classes.mainContainer}>
        <Grid
          item
          container
          direction='column'
          justify='center'
          alignItems='center'
          className={classes.searchBlock}
        >
          <Typography variant='h2' className='h2'>
            Alugue na Hora
          </Typography>
          <Typography variant='h3' className='h3'>
            Encontre seu imóvel
          </Typography>
        </Grid>
      </Grid>

      <Grid item className={classes.formContainer}></Grid>
    </Grid>
  );
}

export default Home;
