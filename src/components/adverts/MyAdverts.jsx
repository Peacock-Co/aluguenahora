// React Redux
import React from 'react';
import { useSelector } from 'react-redux';

// Material UI
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CardAdvertProperty } from '../adverts/CardAdvertProperty';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '6em',
    alignCenter: 'center',
    width: '100%',
  },
  card: {
    padding: theme.spacing(1),
  },
}));

export const MyAdverts = ({ id }) => {
  const { adverts, active: advert } = useSelector((state) => state.adverts);
  console.log(advert);

  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer} container spacing={2}>
      {id ? (
        <Typography variant='h3'>
          Ainda não há inserido nenhum imóvel
        </Typography>
      ) : (
        <>
          <Grid container justify='center'>
            {adverts.map((advert) => (
              <Grid key={advert.id} item className={classes.card}>
                <CardAdvertProperty {...advert} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
};
