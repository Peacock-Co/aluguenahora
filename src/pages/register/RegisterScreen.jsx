import React from 'react';

// React router
import { Link } from 'react-router-dom';

// Validator
import validator from 'validator';

// Material UI
import { Grid, Typography, TextField, Button } from '@material-ui/core';

// Custom Hooks
import { useForm } from '../../hooks/useForm';

// Custom button
import CustomButton from '../../components/custom-button/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorAction, unsetErrorAction } from '../../actions/Ui';
import { startRegisterWithNameEmailPassword } from '../../actions/Auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'Leonardo',
    email: 'test@test.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(
        startRegisterWithNameEmailPassword(name, email, password, password2)
      );
    }
  };

  const isFormValid = () => {
    if (name.trim().length <= 2) {
      dispatch(setErrorAction('* Por favor preencha campo com um nome'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('* Formato de Email não válido'));
      return false;
    } else if (password !== password2) {
      dispatch(setErrorAction('* As contrasenhas devem coincidir!'));
      return false;
    } else if (password.length < 5 && password2.length < 5) {
      dispatch(
        setErrorAction('* A contrasenha deve ter no mínimo 6 caracteres! ')
      );
      return false;
    }
    dispatch(unsetErrorAction);
    return true;
  };

  return (
    <Grid container justify='center'>
      <Grid item style={{ marginTop: '.5em' }}>
        <Typography variant='h2'>Registrar</Typography>
        <Typography variant='h3'>
          Registre com um email válido e uma contrasenha
        </Typography>
        <form onSubmit={handleRegister}>
          {msgError && (
            <Grid style={{ color: 'red', marginTop: '1em' }}>{msgError}</Grid>
          )}
          <TextField
            fullWidth
            name='name'
            type='text'
            autoComplete='off'
            label='Nome'
            variant='outlined'
            value={name}
            onChange={handleInputChange}
            required
            style={{ marginTop: '1em' }}
          />
          <TextField
            fullWidth
            name='email'
            type='email'
            autoComplete='on'
            label='Email'
            variant='outlined'
            value={email}
            onChange={handleInputChange}
            required
            md={6}
            xs={12}
            style={{ marginTop: '2em' }}
          />
          <TextField
            fullWidth
            name='password'
            type='password'
            autoComplete='on'
            label='Contrasenha'
            variant='outlined'
            value={password}
            onChange={handleInputChange}
            required
            md={6}
            xs={12}
            style={{ marginTop: '2em' }}
          />
          <TextField
            fullWidth
            name='password2'
            type='password'
            autoComplete='on'
            label='Contrasenha 2'
            variant='outlined'
            value={password2}
            onChange={handleInputChange}
            required
            md={6}
            xs={12}
            style={{ marginTop: '2em' }}
          />
          <Grid container justify='center'>
            <CustomButton variant='contained' type='submit' color='secondary'>
              Registrar
            </CustomButton>
          </Grid>
          <Grid container justify='center'>
            <Link to='/auth/login' style={{ textDecoration: 'none' }}>
              <Button
                size='small'
                style={{ justifyContent: 'center', marginTop: '1em' }}
                onClick={handleInputChange}
                type='button'
              >
                Já possuo uma conta
              </Button>
            </Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
