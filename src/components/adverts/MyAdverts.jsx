// React Redux
import React, { useState } from 'react';

// Material UI
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardAdvertPropertyList from './CardAdvertPropertyList';
import { sampleData } from '../../assets/api/sampleData';
import { AnnounceToRent } from './AnnounceToRent';
import CustomButton from '../custom-button/CustomButton';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '6em',
    marginBottom: '10em',
    alignCenter: 'center',
    width: '100%',
  },
  card: {
    padding: theme.spacing(1),
  },
}));

export const MyAdverts = () => {
  const classes = useStyles();
  const [adverts, setAdverts] = useState(sampleData);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Grid
        container
        direction='column'
        className={classes.mainContainer}
        spacing={2}
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <CardAdvertPropertyList adverts={adverts} formOpen={formOpen} />
        </Grid>
        <Grid item>
          <CustomButton onClick={() => setFormOpen(true)}>
            Anunciar imóvel
          </CustomButton>
        </Grid>
        <Grid item>{formOpen && <AnnounceToRent />}</Grid>
      </Grid>
    </>
  );
};
