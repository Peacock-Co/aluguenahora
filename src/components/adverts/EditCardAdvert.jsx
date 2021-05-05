// React
import React, { useState, useEffect, useRef } from 'react';

// Redux
import { useSelector } from 'react-redux';

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

const rooms = [
  {
    value: '1',
    label: '1 quarto',
  },
  {
    value: '2',
    label: '2 quartos',
  },
  {
    value: '3',
    label: '3 quartos',
  },
  {
    value: '4',
    label: '4 + quartos',
  },
];

export function EditCardAdvert({ id }) {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const [type, setType] = useState('');
  const [room, setRoom] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [region, setRegion] = useState('');
  const [price, setPrice] = useState('');
  const [meters, setMeters] = useState('');

  const { active } = useSelector((state) => state.adverts);
  console.log(active);

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  const activeId = useRef(id);

  useEffect(() => {
    if (id !== activeId.current) {
      handleFormSubmit();
      activeId.current = id;
    }
  }, [id]);

  return (
    <Grid
      direction='column'
      container
      alignItems='center'
      className={classes.root}
    >
      <Grid item style={{ marginTop: '1em' }}>
        <Typography variant='h2'>Editar seu imóvel</Typography>
        <Typography variant='h3'>Preencha os dados necessários</Typography>
      </Grid>
      <Grid item container justify='center'>
        <form onSubmit={handleFormSubmit} type='submit'>
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
            id='city'
            value={city}
            type='text'
            autoComplete='on'
            label='Cidade'
            variant='outlined'
            required
            helperText='Cidade'
            style={{ marginTop: '1em' }}
            onChange={(event) => setCity(event.target.value)}
          />
          <TextField
            fullWidth
            id='rua'
            value={street}
            type='text'
            autoComplete='on'
            label='Rua'
            variant='outlined'
            required
            helperText='Introduza o endereço'
            style={{ marginTop: '1em' }}
            onChange={(event) => setStreet(event.target.value)}
          />
          <TextField
            fullWidth
            id='region'
            value={region}
            type='text'
            autoComplete='on'
            label='Bairro'
            variant='outlined'
            required
            helperText='Introduza o bairro'
            style={{ marginTop: '1em' }}
            onChange={(event) => setRegion(event.target.value)}
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
            style={{ marginTop: '1em', width: '100%' }}
          />
          <Grid container direction='row'>
            <Grid item xs={6} md={6}>
              <TextField
                id='room'
                value={room}
                fullWidth
                select
                helperText='Selecione quantos quartos'
                variant='outlined'
                onChange={(event) => setRoom(event.target.value)}
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
                value={meters}
                type='text'
                autoComplete='on'
                label='m2'
                variant='outlined'
                required
                helperText='Introduza os metros quadrados'
                onChange={(event) => setMeters(event.target.value)}
                style={{ marginTop: '1em' }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justify='center'
            direction='row'
            className={classes.buttons}
          >
            <CustomButton variant='contained' type='submit' color='default'>
              Editar
            </CustomButton>
            <CustomButton variant='contained' type='submit' color='secondary'>
              Deletar
            </CustomButton>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
