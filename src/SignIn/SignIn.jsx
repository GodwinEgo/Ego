import { Avatar, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined } from '@mui/icons-material'

function Copyright ( props ) 
{
  return (
    <Typography variant="body2" color="text.secondary" align='center' { ...props }>
      { 'Copyright @' }
      <Link color='inherit' >
        Your Website
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
              autoFocus
            />


          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )




};


