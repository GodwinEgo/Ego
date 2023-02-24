import React from 'react'
import { Avatar, createTheme, CssBaseline, Button, Link, FormControlLabel, Grid, TextField, ThemeProvider, Typography, Container } from '@mui/material'
import { Box } from '@mui/system';

import { CheckBox, LockOutlined } from '@mui/icons-material'



function Copyright ( props ) 
{
  return (
    <Typography variant="body2" color="text.secondary" align='center' { ...props }>
      { 'Copyright @' }
      <Link color='inherit' href="#" >
        Ego
      </Link>{ ' ' }
      { new Date().getFullYear() }
      { ' . ' }
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn ()
{
  const handleSubmit = ( event ) =>
  {
    event.preventDefault();
    const data = new FormData( event.currentTarget );
    console.log( {
      email: data.get( 'email' ),
      password: data.get( 'password' ),
    } );
  };

  return (
    <ThemeProvider theme={ theme }>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant='h5'>
            Sign In
          </Typography>
          <Box component='form' onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='password'
              type='password'
              label='Password '
              name='password'
              autoComplete='current-password'
            />

            <FormControlLabel
              control={ <CheckBox value="remember" color='primary' /> }
              label="Remember Me"
            />
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={ { mat: 3, mb: 2 } }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  { "Don't have an account? Sign Up" }
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={ { mt: 8, mb: 4 } } />
      </Container>
    </ThemeProvider>
  );
}





