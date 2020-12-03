import React, { useState } from 'react';

//Material UI
import {
  Grid,
  TextField,
  Typography,
  MenuItem,
  Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

//Styles
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '35em',
    [theme.breakpoints.down('md')]: {
      height: '33em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20em',
      marginTop: '5em',
    },
  },
  searchBlock: {
    width: '100%',
    textAlign: 'center',
  },
  Typography: {
    h3: {
      [theme.breakpoints.down('md')]: {
        fontVariant: 'h2',
      },
    },
  },
  separateItem: {
    marginTop: '1em',
  },
  buttomForm: {
    marginTop: '2em',
    width: '20em',
    height: '3.5em',
    borderRadius: '0.5em',
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

function Home(props) {
  const classes = useStyles();
  const [room, setRoom] = useState('2');
  const [price, setPrice] = React.useState('2');

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        className={classes.mainContainer}
        justify='center'
        alignItems='center'
      >
        <Grid item container direction='column' className={classes.searchBlock}>
          <Grid item>
            <Typography variant='h2' className='h2'>
              Alugue na Hora
            </Typography>
            <Typography variant='h3' className='h3'>
              Encontre seu imóvel
            </Typography>
          </Grid>
          <Grid
            container
            direction='column'
            justify='center'
            alignContent='center'
          >
            <form>
              <Grid container>
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
              </Grid>
              <Grid item className={classes.separateItem}></Grid>
              <Grid container>
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
                  helperText='Selecione precio'
                  variant='outlined'
                >
                  {prices.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Button
                variant='contained'
                size='medium'
                color='secondary'
                className={classes.buttomForm}
              >
                Encontrar imóveis
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.formContainer}></Grid>
    </Grid>
  );
}

export default Home;
