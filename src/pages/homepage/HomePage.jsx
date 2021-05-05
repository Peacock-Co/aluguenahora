import React, { useState } from 'react';
import CustomButton from '../../components/custom-button/CustomButton';

//Material UI
import { Grid, TextField, Typography, MenuItem } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../components/ui/Theme';
import { makeStyles } from '@material-ui/styles';

//Styles
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    marginBottom: '9em',
    alignCenter: 'center',
    width: '100%',
  },
  filterContainer: {
    marginTop: '1em',
  },
}));

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
    label: '4 quartos +',
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

export const HomePage = (props) => {
  const classes = useStyles();
  const [room, setRoom] = useState('2');
  const [price, setPrice] = useState('2');

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container direction='column'>
          <Grid container className={classes.mainContainer} justify='center'>
            <Grid item>
              <Typography variant='h2' className='h2'>
                Alugue na Hora
              </Typography>
              <Typography variant='h3' className='h3'>
                Encontre seu imóvel!
              </Typography>
              <form>
                <TextField
                  fullWidth
                  disabled
                  id='outlined-disabled'
                  label='Cidade'
                  defaultValue='Campo Grande'
                  variant='outlined'
                  md={6}
                  xs={12}
                />
                <Grid container className={classes.filterContainer}>
                  <TextField
                    id='outlined-search'
                    label='Busque por bairro'
                    type='search'
                    variant='outlined'
                    md={3}
                    xs={6}
                  />
                  <TextField
                    id='outlined-select-price'
                    select
                    value={price}
                    onChange={handleChangePrice}
                    helperText='Selecione nº de quartos '
                    variant='outlined'
                    md={3}
                    xs={6}
                  >
                    {rooms.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id='outlined-select-room'
                    select
                    value={room}
                    onChange={handleChangeRoom}
                    helperText='Selecione preço'
                    variant='outlined'
                  >
                    {prices.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <CustomButton
                  variant='contained'
                  size='medium'
                  color='secondary'
                >
                  Encontrar imóveis
                </CustomButton>
              </form>
            </Grid>
          </Grid>
          <Grid item className={classes.formContainer}></Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
