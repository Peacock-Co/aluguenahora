import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cuid from 'cuid';

// Material UI
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import CustomButton from '../custom-button/CustomButton';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

//Styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4em',
  },
  dialog: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4em',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: '42em',
  },
  root: {
    width: '100%',
    margin: theme.spacing(1),
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

export default function ScrollDialog({
  createAdvert,
  selectedAdvert,
  updatedAdvert,
  open,
  handleClose,
  handleOpen,
  scroll,
}) {
  const classes = useStyles();

  const initialValues = selectedAdvert ?? {
    // null conditional operator
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
    selectedAdvert
      ? updatedAdvert({ ...selectedAdvert, ...values })
      : createAdvert({ ...values, id: cuid(), advertPhotosUrl: [{}] });
    handleClose();
    e.preventDefault();
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <CustomButton onClick={handleOpen}>Announce</CustomButton>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        className={classes.dialog}
      >
        <DialogTitle>
          <Grid container alignItems='center' direction='column'>
            <Grid item>
              <Typography variant='h2'>
                {selectedAdvert ? 'Editar anuncio' : 'Anunciar seu imóvel'}
              </Typography>
            </Grid>
            <Typography variant='h3'>
              {selectedAdvert ? '' : 'Preencha os dados necessários'}
            </Typography>
          </Grid>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <Grid
            direction='column'
            container
            alignItems='center'
            className={classes.root}
          >
            <Grid item container justify='center' style={{ marginTop: '1em' }}>
              <form onSubmit={handleFormSubmit} type='submit'>
                <Grid container direction='row'>
                  <Grid item xs={6} md={6}>
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
                  </Grid>
                  <Grid item xs={6} md={6}>
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
                      onChange={(e) => handleInputChange(e)}
                    />
                  </Grid>
                </Grid>
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
                  style={{ marginTop: '1em' }}
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
              </form>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container justify='center'>
            <Grid item>
              <CustomButton
                variant='contained'
                type='submit'
                color='secondary'
                component={Link}
                to='/meus-anuncios'
                size='small'
                onClick={handleFormSubmit}
              >
                {selectedAdvert ? 'Editar' : 'Anunciar'}
              </CustomButton>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
