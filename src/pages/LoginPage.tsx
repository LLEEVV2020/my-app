import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import { Container, Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await login(username, password);
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/table');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm onLogin={handleLogin}/>
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Container>
  );
};

export default LoginPage;