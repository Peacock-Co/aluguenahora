import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
  advertActive,
  createNewAdvert,
  startSaveAdvert,
} from '../../actions/Adverts';

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
    width: '100%',
    margin: theme.spacing(1),
    marginBottom: '3em',
  },
}));

const types = [
  {
    value: 'Casa',
    label: 'Casa',
  },
  {
    value: 'Apartamento',
    label: 'Apartamento',
  },
  {
    value: 'Studio e kitnet',
    label: 'Studio e Kitnet',
  },
];

const rooms = [
  {
    value: '1 quarto',
    label: '1 quarto',
  },
  {
    value: '2 quartos',
    label: '2 quartos',
  },
  {
    value: '3 quartos',
    label: '3 quartos',
  },
  {
    value: '4 + quartos',
    label: '4 + quartos',
  },
];

export function AnnounceToRent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialValues = {
    imageUrl: [{}],
    city: 'Campo Grande',
    type: 'Casa',
    room: '2 quartos',
    street: '',
    region: '',
    rentPrice: '',
    squareMeters: '',
  };

  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function handleCreateNewAdvert() {
    dispatch(createNewAdvert());
  }

  useEffect(() => {
    dispatch(advertActive(values.id, { ...values }));
  }, [values, dispatch]);

  return (
    <Grid
      direction='column'
      container
      alignItems='center'
      className={classes.root}
    >
      <Grid item style={{ marginTop: '1em' }}>
        <Typography variant='h2'>Anunciar seu imóvel</Typography>
        <Typography variant='h3'>Preencha os dados necessários</Typography>
      </Grid>
      <Grid item container justify='center'>
        <form onSubmit={handleFormSubmit} type='submit'>
          <TextField
            id='type'
            value={values.type}
            name='type'
            fullWidth
            select
            helperText='Selecione tipo de imóvel '
            variant='outlined'
            onChange={(e) => handleInputChange(e)}
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            disabled
            fullWidth
            id='city'
            value={values.city}
            name='city'
            type='text'
            autoComplete='on'
            label='Cidade'
            variant='outlined'
            required
            style={{ marginTop: '1em' }}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            fullWidth
            id='rua'
            value={values.street}
            name='street'
            type='text'
            autoComplete='on'
            label='Rua'
            variant='outlined'
            required
            helperText='Introduza o endereço'
            style={{ marginTop: '2em' }}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            fullWidth
            id='region'
            value={values.region}
            name='region'
            type='text'
            autoComplete='on'
            label='Bairro'
            variant='outlined'
            required
            helperText='Introduza o bairro'
            style={{ marginTop: '1em' }}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            fullWidth
            id='valor'
            value={values.rentPrice}
            name='rentPrice'
            type='text'
            autoComplete='on'
            label='R$'
            variant='outlined'
            required
            helperText='Introduza o valor do aluguel'
            onChange={(e) => handleInputChange(e)}
            style={{ marginTop: '1em', width: '100%' }}
          />
          <Grid container direction='row'>
            <Grid item xs={6} md={6}>
              <TextField
                id='room'
                value={values.room}
                name='room'
                fullWidth
                select
                helperText='Selecione quantos quartos'
                variant='outlined'
                onChange={(e) => handleInputChange(e)}
                style={{ marginTop: '1em', width: '100%' }}
              >
                {rooms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                fullWidth
                id='meters'
                value={values.squareMeters}
                name='squareMeters'
                type='text'
                autoComplete='on'
                label='m2'
                variant='outlined'
                required
                helperText='Introduza os metros quadrados'
                onChange={(e) => handleInputChange(e)}
                style={{ marginTop: '1em' }}
              />
            </Grid>
          </Grid>
          <Grid item container justify='center'>
            <CustomButton
              variant='contained'
              type='submit'
              color='secondary'
              onClick={handleCreateNewAdvert}
              component={Link}
              to='/meus-anuncios'
            >
              Anunciar
            </CustomButton>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
