import React from 'react';

//Material UI
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import background from '../../assets/homeclock.jpg';

//Styles
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '30em',
    opacity: '.8',
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      {/*Search block*/}
      <section className={classes.background}></section>
    </Grid>
  );
}

export default Home;
