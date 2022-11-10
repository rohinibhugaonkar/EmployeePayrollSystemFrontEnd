import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    background: "#1976d2",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" background-color= "#1976d2" >

      <Toolbar>
            
            <Typography variant="h4" align="center"  noWrap component="div" className={classes.title}>
              Employee Payroll System
            </Typography>
          </Toolbar>
          
      </AppBar>
   
    </Box>
  );
}
