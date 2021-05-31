// React Redux
import React, { useState } from 'react';

// Material UI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardAdvertPropertyList from './CardAdvertPropertyList';
import { sampleData } from '../../assets/api/sampleData';
import { AnnounceToRent } from './AnnounceToRent';

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
  const [open, setOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  function handleCreateAdvert(advert) {
    setAdverts([...adverts, advert]);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSelectAdvert(advert) {
    setSelectedAdvert(advert);
    handleOpen(true);
    console.log(advert);
  }

  function handleCreateFormOpen() {
    setSelectedAdvert(null);
    handleOpen(true);
  }

  function handleUpdateAdvert(updatedAdvert) {
    setAdverts(
      adverts.map((adv) => (adv.id === updatedAdvert.id ? updatedAdvert : adv))
    );
  }

  return (
    <>
      <Grid
        className={classes.mainContainer}
        container
        direction='column'
        spacing={2}
        alignItems='center'
      >
        <Grid item>
          <CardAdvertPropertyList
            adverts={adverts}
            selectAdvert={handleSelectAdvert}
          />
        </Grid>
        <Grid item>
          <AnnounceToRent
            setAdverts={setAdverts}
            createAdvert={handleCreateAdvert}
            handleClose={handleClose}
            handleOpen={handleCreateFormOpen}
            open={open}
            selectedAdvert={selectedAdvert}
            key={selectedAdvert ? selectedAdvert.id : null}
            updatedAdvert={handleUpdateAdvert}
          />
        </Grid>
      </Grid>
    </>
  );
};
