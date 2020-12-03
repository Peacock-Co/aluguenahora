// React
import React from 'react';

// Custom button
import CustomButton from '../custom-button/CustomButton';

// Material UI
import { Grid, Typography, TextField } from '@material-ui/core';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emai: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Grid container justify='center'>
        <Grid item style={{ marginTop: '5em' }}>
          <Typography variant='h2'>Já tenho uma conta</Typography>
          <Typography variant='h3'>
            Entra com seu email e contrasenha
          </Typography>
          <form onSubmit={this.handleSubmit}>
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
            <CustomButton
              variant='contained'
              type='submit'
              value='submit-form'
              color='secondary'
            >
              Sign in
            </CustomButton>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default SignIn;
