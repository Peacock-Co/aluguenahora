import React from 'react';

//Material UI
import { Grid, Typography, Icon, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

//Lottie
import Lottie from 'react-lottie';
import animationData from '../../lotties/house-flat.json';

//Styles
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '700px',
  },
  animation: {
    maxWidth: '50em',
    maxHeight: '21em',
    marginTop: '4em',
  },
  searchContainer: {
    marginTop: '6em',
  },
}));

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
    <Grid container direction='column' className={classes.mainContainer}>
      {/*Search block*/}
      <Grid container direction='row'>
        <Grid sm item container className={classes.animation}>
          <Lottie
            options={defaultOptions}
            height={'100%'}
            width={'100%'}
            resizeMode='center'
          />
        </Grid>

        <Grid sm item container className={classes.searchContainer}>
          <Grid item container justify='center' direction='column'>
            <Grid item>
              <Typography variant='h2'>A blowfish! Cogitare. </Typography>
              <Typography variant='h3'>Quid faciam blowfish, Isai. </Typography>
            </Grid>
            <Grid item container>
              <Grid item>
                <Icon />
                <TextField placeholder='Busque por cidade' />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <Icon />
                <TextField placeholder='Busque por bairro' />
              </Grid>
              <Grid item>
                <Icon />
                <TextField placeholder='Busque por cidade' />
              </Grid>
              <Grid item>
                <Icon />
                <TextField placeholder='Busque por cidade' />
              </Grid>
            </Grid>
          </Grid>
          <Button>Encontrar imóveis</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
