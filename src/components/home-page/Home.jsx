import React from 'react';

//Material UI
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

//Lottie
import Lottie from 'react-lottie';
import animationData from '../../lotties/house-flat.json';

//Styles
const useStyles = makeStyles((theme) => ({}));

function Home() {
  const classes = useStyles();

  //Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRadio: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container justify='center' alignItems='center' direction='row'>
          <Grid sm item>
            <Lottie options={defaultOptions} height={400} width={400} />
          </Grid>
          <Grid sm item alignItems='center' className={classes.search}>
            <Typography variant='h2' align='center'>
              Encontre seu imóvel
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
