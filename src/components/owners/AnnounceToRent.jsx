import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { startNewAdvert } from '../../actions/adverts';

// Material UI
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import CustomButton from '../../components/custom-button/CustomButton';

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

export function AnnounceToRent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialValues = {
    types: { value: '' },
    rua: '',
    bairro: '',
    prices: { value: '' },
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    console.log(values);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleAddNewAdvert = () => {
    dispatch(startNewAdvert());
  };

  return (
    <>
      <form classes={classes.root} onSubmit={handleFormSubmit}>
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

            <TextField
              defaultValue={'2'}
              fullWidth
              select
              helperText='Selecione tipo de imóvel '
              variant='outlined'
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              name='rua'
              value={values.rua}
              type='text'
              autoComplete='on'
              label='Rua'
              variant='outlined'
              required
              style={{ marginTop: '2em' }}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              name='bairro'
              value={values.bairro}
              type='text'
              autoComplete='on'
              label='Bairro'
              variant='outlined'
              required
              style={{ marginTop: '2em' }}
              onChange={handleInputChange}
            />
            <TextField
              defaultValue={'2'}
              select
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
            <Grid container justify='space-between'></Grid>
          </Grid>
        </Grid>
        <CustomButton
          variant='contained'
          type='submit'
          color='secondary'
          onClick={handleAddNewAdvert}
        >
          Anunciar
        </CustomButton>
      </form>
    </>
  );
}
