// Material UI
import { Grid } from '@material-ui/core';

import React from 'react';
import { CardAdvertPropertyItem } from './CardAdvertPropertyItem';

export default function CardAdvertPropertyList({ adverts }) {
  return (
    <>
      <Grid container direction='row'>
        <Grid item container justify='center'>
          {adverts.map((advert) => (
            <CardAdvertPropertyItem advert={advert} key={advert.id} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
