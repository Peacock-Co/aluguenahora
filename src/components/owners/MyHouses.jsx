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

export const MyHouses = ({ id }) => {
  const { properties, active } = useSelector((state) => state.properties);
  console.log(active);

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
            {properties.map((property) => (
              <Grid key={property.id} item className={classes.card}>
                <CardAdvertProperty {...property} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
};
