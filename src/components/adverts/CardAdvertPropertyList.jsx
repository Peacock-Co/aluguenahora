// Material UI
import { Grid } from '@material-ui/core';

import React from 'react';
import { CardAdvertPropertyItem } from './CardAdvertPropertyItem';

export default function CardAdvertPropertyList() {
  return (
    <>
      <Grid container direction='row'>
        <Grid item container justify='center'>
          <CardAdvertPropertyItem />
          <CardAdvertPropertyItem />
          <CardAdvertPropertyItem />
          <CardAdvertPropertyItem />
        </Grid>
      </Grid>
    </>
  );
}
