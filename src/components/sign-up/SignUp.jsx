import React from 'react';

import CustomButton from '../custom-button/CustomButton';

// React router

// Material UI

import { Typography, TextField, Grid } from '@material-ui/core';

const SignUp = () => {
  return (
    <Grid container justify='center'>
      <Grid item style={{ marginTop: '5em' }}>
        <Typography variant='h2'>Já tenho uma conta</Typography>
        <Typography variant='h3'>Entra com seu email e contrasenha</Typography>
        <Grid onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            name='email'
            value={this.state.email || ''}
            type='email'
            autoComplete='on'
            label='Email'
            variant='outlined'
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            value={this.state.password || ''}
            required
            md={6}
            xs={12}
            style={{ marginTop: '2em' }}
          />
          <Grid container justify='space-between'>
            <CustomButton
              variant='contained'
              type='submit'
              value='submit-form'
              color='secondary'
            >
              Register
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
