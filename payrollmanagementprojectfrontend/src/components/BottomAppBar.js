import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WorkIcon from '@mui/icons-material/Work';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@mui/icons-material/Call';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function BottomAppBar() {

    const classes = useStyles();

  return (
    <React.Fragment>
      
      <AppBar position="fixed" color="primary"  sx={{ top: 'auto', bottom: 0 }}>
      
        <Toolbar>
         
          
          
          <StyledFab color="secondary" aria-label="add">
            <ContactPhoneIcon />
          </StyledFab>
            <WorkIcon />
            <ContactPhoneIcon />
            <Typography variant="h9" className={classes.title}>
            All rights reserved! 
          </Typography>
          <Typography variant="h9" className={classes.title}>
            Contact us <CallIcon />: (+1)786-543-5670
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <EngineeringIcon />
          <CloudDownloadIcon />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}