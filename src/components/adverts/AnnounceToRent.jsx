import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Material UI
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import CustomButton from '../custom-button/CustomButton';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

//Styles
const useStyles = makeStyles((theme) => ({
  modal: {
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

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export function AnnounceToRent() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        react-spring
      </button>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid
              direction='column'
              container
              alignItems='center'
              className={classes.root}
            >
              <Grid item style={{ marginTop: '1em' }}>
                <Typography variant='h2'>Anunciar seu imóvel</Typography>
                <Typography variant='h3'>
                  Preencha os dados necessários
                </Typography>
              </Grid>
              <Grid
                item
                container
                justify='center'
                style={{ marginTop: '1em' }}
              >
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
                  <Grid item container justify='center'>
                    <CustomButton
                      variant='contained'
                      type='submit'
                      color='secondary'
                      component={Link}
                      to='/meus-anuncios'
                      size='small'
                    >
                      Anunciar
                    </CustomButton>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
