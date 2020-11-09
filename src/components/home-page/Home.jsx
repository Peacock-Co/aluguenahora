import React from 'react';

//Material UI
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  Icon,
} from '@material-ui/core';

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
  title: {
    textAlign: 'center',
  },
  bairroContainer: {
    [theme.breakpoints.down('md')]: {
      direction: 'column',
    },
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
      <section>
        <Grid container direction='row'>
          <Grid sm={5} item container className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={'100%'}
              width={'100%'}
              resizeMode='center'
            />
          </Grid>

          <Grid
            sm={7}
            item
            container
            justify='center'
            alignItems='center'
            direction='column'
            className={classes.searchContainer}
          >
            <Grid item className={classes.title}>
              <Typography variant='h2'>A blowfish! Cogitare. </Typography>
              <Typography justify='center' variant='h3'>
                Quid faciam blowfish, Isai.{' '}
              </Typography>
            </Grid>
            <Grid item container direction='column'>
              <FormControl>
                <Grid item>
                  <Icon className='fas fa-map-marker-alt' />
                  <label>
                    <span>Cidade</span>
                  </label>
                  <TextField placeholder='Busque por cidade' fullWidth={true} />
                </Grid>
                <Grid item container>
                  <Grid item className={classes.bairroContainer}>
                    <TextField xs='12' md='12' id='bairro' label='Bairro' />
                  </Grid>
                  <Grid item>
                    <TextField
                      xs='12'
                      md='3'
                      id='aluguel'
                      label='Aluguel até'
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      xs='6'
                      md='3'
                      id='quarto'
                      label='Nº de quartos'
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Grid>
  );
}

export default Home;
