// React
import React from 'react';

// // React Redux
import { useDispatch, useSelector } from 'react-redux';

// React router
import { Link } from 'react-router-dom';

// Material UI
import { Grid, Typography, TextField, Icon, Button } from '@material-ui/core';
import CustomButton from '../../components/custom-button/CustomButton';

// Custom Hooks
import { useForm } from '../../hooks/useForm';

// Redux
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'test@test.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <Grid container justify='center'>
      <Grid item style={{ marginTop: '5em' }}>
        <Typography variant='h2'>Login</Typography>
        <Typography variant='h3'>Entra com seu email e contrasenha</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            name='email'
            type='email'
            autoComplete='on'
            label='Email'
            variant='outlined'
            onChange={handleInputChange}
            value={email}
            required
            style={{ marginTop: '2em' }}
          />
          <TextField
            fullWidth
            name='password'
            type='password'
            autoComplete='on'
            label='Password'
            variant='outlined'
            onChange={handleInputChange}
            value={password}
            required
            md={6}
            xs={12}
            style={{ marginTop: '2em' }}
          />
          <Grid container justify='space-between'>
            <CustomButton
              variant='contained'
              type='submit'
              color='secondary'
              disabled={loading}
            >
              Entrar
            </CustomButton>

            <CustomButton
              variant='contained'
              onClick={handleGoogleLogin}
              value='submit-form'
              color='primary'
              style={{ marginLeft: '1em' }}
              startIcon={<Icon className='fab fa-google' />}
            >
              Entrar con Google
            </CustomButton>
          </Grid>
          <Grid container justify='center'>
            <Link to='/auth/register' style={{ textDecoration: 'none' }}>
              <Button
                size='small'
                style={{ justifyContent: 'center', marginTop: '2em' }}
                onClick={handleInputChange}
                type='button'
              >
                Criar uma conta
              </Button>
            </Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
