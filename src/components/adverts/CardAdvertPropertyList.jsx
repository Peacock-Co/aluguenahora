// Material UI
import { Grid, Typography, makeStyles } from '@material-ui/core';

import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import { CardAdvertPropertyItem } from './CardAdvertPropertyItem';
import { createNewAdvert } from '../../actions/Adverts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(1),
    marginBottom: '11em',
  },
}));

export default function CardAdvertPropertyList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { adverts } = useSelector((state) => state.adverts);

  function handleCreateNewAdvert() {
    dispatch(createNewAdvert());
  }

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
              <Grid item>
                <CustomButton
                  component={Link}
                  to='/anunciar-para-alugar'
                  onClick={handleCreateNewAdvert}
                >
                  Anunciar imóvel
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid item container justify='center'>
            {adverts.map((advert) => (
              <CardAdvertPropertyItem key={advert.id} {...advert} />
            ))}
          </Grid>
        )}
      </Grid>
    </>
  );
}
