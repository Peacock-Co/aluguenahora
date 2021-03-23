// React Redux
import React from 'react';

// Material UI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardAdvertPropertyList from './CardAdvertPropertyList';
import { sampleData } from '../../assets/api/sampleData';

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

export const MyAdverts = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.mainContainer} container spacing={2}>
        <CardAdvertPropertyList />
      </Grid>
    </>
  );
};
