// Material UI
import { Grid, Typography, makeStyles } from '@material-ui/core';

import React from 'react';

import { CardAdvertPropertyItem } from './CardAdvertPropertyItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(1),
    marginBottom: '9em',
    height: '18em',
  },
}));

export default function CardAdvertPropertyList({ adverts, selectAdvert }) {
  const classes = useStyles();

  return (
    <>
      <Grid container direction='row' justify='center' className={classes.root}>
        {adverts <= 0 ? (
          <Grid item>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid item>
                <Typography variant='h3'>
                  Você ainda não possui nenhum imóvel anunciado
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid item container justify='center'>
            {adverts.map((advert) => (
              <CardAdvertPropertyItem
                advert={advert}
                key={advert.id}
                selectAdvert={selectAdvert}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </>
  );
}
