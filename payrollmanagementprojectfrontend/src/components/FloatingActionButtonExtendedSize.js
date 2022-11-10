import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate   } from 'react-router-dom';

export default function FloatingActionButtonExtendedSize() {
    const navigate = useNavigate();
    
    const handleLogin = async e => {
        navigate ('/login')
      }
      const handleHome = async e => {
        navigate ('/')
      }
      const handleRegister = async e => {
        navigate ('/register')
      }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary" aria-label="add" onClick ={handleLogin}>
        <NavigationIcon sx={{ mr: 1 }} />
        Login
      </Fab>
      <Fab variant="extended" size="medium" color="primary" aria-label="add" onClick ={handleHome}>
        <NavigationIcon sx={{ mr: 1 }} />
        Home
      </Fab>
      <Fab variant="extended" color="primary" aria-label="add" onClick ={handleRegister}>
        <NavigationIcon sx={{ mr: 1 }} />
        Register
      </Fab>
    </Box>
  );
}
