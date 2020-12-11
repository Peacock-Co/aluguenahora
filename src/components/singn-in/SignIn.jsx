// React
import React, { useState, useEffect } from 'react';

// React router
import { withRouter } from 'react-router-dom';

// Custom button
import CustomButton from '../custom-button/CustomButton';

// Firebase
import { signInWithGoogle, auth, db } from '../firebase/firebase.utils';

// Material UI
import { Grid, Typography, TextField, Icon, Button } from '@material-ui/core';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [register, setRegister] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setError('Ingresse o email');
      return;
    }
    if (!password.trim()) {
      setError('Ingresse o password');
      return;
    }
    if (password < 6) {
      setError('Password deve conter mais de 6 caracteres');
      return;
    }
    console.log('correct...');
    setError(null);

    if (!register) {
      registerUser();
    } else {
      login();
    }
  };

  const login = useEffect(() => {
    try {
      const res = auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);
      setEmail('');
      setPassword('');
      setError(null);
      props.history.push('/meus-imoveis');
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/invalid-email') {
        setError('* O email não corresponde');
      }
      if (error.code === 'auth/user-not-found') {
        setError('* Email não registrado');
      }
      if (error.code === 'auth/wrong-password') {
        setError('* Contrasenha incorreta');
      }
    }
  }, [email, password, props.history]);

  const registerUser = useEffect(() => {
    try {
      const res = auth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);
      db.collection('users').doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid,
      });
      setEmail('');
      setPassword('');
      setError(null);
      props.history.push('/meus-imoveis');
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/invalid-email') {
        setError('* Formato de email não válido');
      }
      if (error.code === 'auth/email-already-in-use') {
        setError('* Este email já está em uso');
      }
    }
  }, [email, password, props.history]);

  return (
    <Grid container justify='center'>
      <Grid item style={{ marginTop: '5em' }}>
        <Typography variant='h2'>
          {register ? 'Já tenho uma conta' : 'Cadastro de usuário'}
        </Typography>
        <Typography variant='h3'>
          {register
            ? 'Entra com seu email e contrasenha'
            : 'Insira um email válido e uma contrasenha'}
        </Typography>
        <form onSubmit={handleSubmit}>
          {error && (
            <Grid container style={{ marginTop: '1em' }}>
              {error}
            </Grid>
          )}
          <TextField
            fullWidth
            name='email'
            type='email'
            autoComplete='on'
            label='Email'
            variant='outlined'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            md={6}
            xs={12}
            style={{ marginTop: '2em' }}
          />
          <TextField
            fullWidth
            name='password'
            id='password'
            type='password'
            autoComplete='on'
            label='Password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleSubmit}
            >
              {register ? 'Entrar' : 'Cadastrar'}
            </CustomButton>
            {register && (
              <CustomButton
                variant='contained'
                onClick={signInWithGoogle}
                value='submit-form'
                color='primary'
                style={{ marginLeft: '1em' }}
                startIcon={<Icon className='fab fa-google' />}
              >
                Entrar con Google
              </CustomButton>
            )}
          </Grid>
          <Grid container justify='center'>
            <Button
              size='small'
              style={{ justifyContent: 'center', marginTop: '2em' }}
              onClick={() => setRegister(!register)}
              type='button'
            >
              {register ? 'Não está registrado?' : 'Já possuo conta'}
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default withRouter(SignIn);
