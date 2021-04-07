import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { startNewAdvert } from '../../actions/Adverts';

// Material UI
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import CustomButton from '../custom-button/CustomButton';

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

const types = [
  {
    value: '1',
    label: 'Casa',
  },
  {
    value: '2',
    label: 'Apartamento',
  },
  {
    value: '3',
    label: 'Studio e Kitnet',
  },
];

export function AnnounceToRent(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [type, setType] = useState('1');
  const [street, setStreet] = useState('');
  const [neighbour, setNeighbour] = useState('');
  const [price, setPrice] = useState('');

  function handleFormSubmit() {
    console.log(type, street, neighbour, price);
  }

  const handleAddNewAdvert = () => {
    dispatch(startNewAdvert());
  };

  return (
    <>
      <Grid
        direction='row'
        container
        justify='center'
        alignItems='center'
        style={{ height: '25em' }}
      >
        <Grid item style={{ marginTop: '1em' }}>
          <Typography variant='h2'>Anunciar seu imóvel</Typography>
          <Typography variant='h3'>Preencha os dados necessários</Typography>
        </Grid>
        <Grid item container justify='center'>
          <form
            classes={classes.root}
            onSubmit={handleFormSubmit}
            type='submit'
          >
            <TextField
              id='type'
              value={type}
              fullWidth
              select
              helperText='Selecione tipo de imóvel '
              variant='outlined'
              onChange={(event) => setType(event.target.value)}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              id='rua'
              value={street}
              type='text'
              autoComplete='on'
              label='Rua'
              variant='outlined'
              required
              style={{ marginTop: '2em' }}
              onChange={(event) => setStreet(event.target.value)}
            />
            <TextField
              fullWidth
              id='bairro'
              value={neighbour}
              type='text'
              autoComplete='on'
              label='Bairro'
              variant='outlined'
              required
              style={{ marginTop: '2em' }}
              onChange={(event) => setNeighbour(event.target.value)}
            />
            <TextField
              fullWidth
              id='valor'
              value={price}
              type='text'
              autoComplete='on'
              label='R$'
              variant='outlined'
              required
              helperText='Introduza o valor do aluguel'
              onChange={(event) => setPrice(event.target.value)}
              style={{ marginTop: '1em' }}
            />
            <Grid item container justify='center'>
              <CustomButton
                variant='contained'
                type='submit'
                color='secondary'
                onClick={handleAddNewAdvert}
              >
                Anunciar
              </CustomButton>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
