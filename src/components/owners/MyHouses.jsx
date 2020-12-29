// React
import React from 'react';

// Material UI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardHouseGrid from '../card-house-grid/CardHouseGrid';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '7em',
    alignCenter: 'center',
    width: '100%',
    padding: theme.spacing(1),
  },
  card: {
    padding: theme.spacing(1),
  },
}));

const MyHouses = () => {
  const entries = [1, 2, 3, 4, 5];
  const classes = useStyles();
  return (
    <Grid className={classes.mainContainer} container spacing={2}>
      {/* <Typography variant='h3'>
          Ainda não há inserido nenhum imóvel
        </Typography> */}
      <Grid item xs={12}>
        <Grid container justify='center'>
          {entries.map((value) => (
            <Grid key={value} item className={classes.card}>
              <CardHouseGrid />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyHouses;
