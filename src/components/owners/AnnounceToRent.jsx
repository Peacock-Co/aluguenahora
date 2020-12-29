import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

import { addNewPropertie } from '../../actions/properties';

// // React router
// import { Link } from 'react-router-dom';

// Material UI
import { Grid, Typography, TextField, MenuItem } from '@material-ui/core';
import CustomButton from '../../components/custom-button/CustomButton';

// Custom Hooks
import { useForm } from '../../hooks/useForm';

const tipo = [
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

const prices = [
  {
    value: '1',
    label: 'R$ 1.000',
  },
  {
    value: '2',
    label: 'R$ 2.000',
  },
  {
    value: '3',
    label: 'R$ 3.000',
  },
  {
    value: '4',
    label: 'R$ 4.000',
  },
  {
    value: '5',
    label: 'R$ 5.000',
  },
  {
    value: '6',
    label: 'R$ 10.000 +',
  },
];

const AnounceToRent = () => {
  const dispatch = useDispatch();
  const [room, setRoom] = useState('2');
  const [price, setPrice] = useState('2');

  const [formValues, handleInputChange] = useForm({
    street: 'Rua Afro Puga',
    neighbour: 'Mata do Jacinto',
  });

  const { street, neighbour } = formValues;

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleInputProperty = () => {
    dispatch(addNewPropertie);
  };

  return (
    <Grid
      container
      justify='center'
      direction='row'
      alignItems='center'
      style={{ height: '25em' }}
    >
      <Grid item style={{ marginTop: '1em' }}>
        <Typography variant='h2'>Anunciar seu imóvel</Typography>
        <Typography variant='h3'>Preencha os dados necessários</Typography>
        <form>
          <TextField
            id='outlined-select-price'
            fullWidth
            select
            value={price}
            onChange={handleChangePrice}
            helperText='Selecione tipo de imóvel '
            variant='outlined'
            md={3}
            xs={6}
          >
            {tipo.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            name='rua'
            value={street}
            onChange={handleInputChange}
            type='text'
            autoComplete='on'
            label='Rua'
            variant='outlined'
            required
            md={6}
            xs={12}
            style={{ marginTop: '2em' }}
          />
          <TextField
            fullWidth
            name='bairro'
            value={neighbour}
            onChange={handleInputChange}
            type='text'
            autoComplete='on'
            label='Bairro'
            variant='outlined'
            required
            md={6}
            xs={12}
            style={{ marginTop: '2em' }}
          />
          <TextField
            id='outlined-select-room'
            select
            value={room}
            onChange={handleChangeRoom}
            helperText='Selecione valor do aluguel'
            variant='outlined'
            fullWidth
            style={{ marginTop: '1em' }}
          >
            {prices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Grid container justify='space-between'>
            <CustomButton
              variant='contained'
              type='submit'
              color='secondary'
              onClick={handleInputProperty}
            >
              Anunciar
            </CustomButton>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default AnounceToRent;
