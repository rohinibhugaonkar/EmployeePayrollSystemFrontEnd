import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FormControl from '@mui/material/FormControl';
import { useNavigate   } from 'react-router-dom';
import dayjs from 'dayjs';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import TextField from '@mui/material/TextField';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


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

const DrawerHeader = styled('div')(({ theme }) => ({
display: 'flex',
alignItems: 'center',
padding: theme.spacing(0, 1),
// necessary for content to be below app bar
...theme.mixins.toolbar,
justifyContent: 'flex-end',
}));


function EmployeeDetails(){

    const [doj, setDOJ] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [dob,setDOB] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [gender, setGender] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

  const theme = useTheme();

  const handleChangeSelect = (event) => {
    setGender(event.target.value);
  };
const handleChangeDOJ = (newValue) => {
    setDOJ(newValue);
  };
  const handleChangeDOB = (newValue) => {
    setDOB(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClickForProfile=(e)=>{
    
    navigate ('/employeeDetails')
    handleDrawerOpen();

  }

  const handleClickForNewEmp=(e)=>{
    navigate ('/addNewEmployee')

  }
  
  const handleClickForSalary=(e)=>{
    navigate ('/payrollDetails')

  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
    return(

      <><Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" align="center" color="#FFFFFF" noWrap component="div" className={classes.title}>
              Employee Payroll System
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>

            <ListItem disablePadding>
              <ListItemButton onClick={handleClickForProfile}>
                <ListItemIcon>
                  <AccountCircleSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleClickForNewEmp}>
                <ListItemIcon>
                  <AccountCircleSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Add New Employee" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleClickForSalary}>
                <ListItemIcon>
                  <PaidSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Salary Report" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            {['Logout'].map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <LogoutIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          
          
        </Main>
      </Box><>
      <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '35ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <div>
        <Typography variant="h4" className={classes.title}>
            Employee Details  
        </Typography>
          </div>
          <div><h2>   </h2></div>
          <div>
        <TextField
        id="filled-basic"
        label="First Name"
        variant="filled" fullWidth
        />
        <TextField 
        id="filled-basic" 
        label="Last  Name" 
        variant="filled" fullWidth 
        />
      </div>
      <div>
        <TextField
        id="filled-basic"
        label="Email"
        variant="filled" fullWidth
        />
        <TextField 
        id="filled-basic" 
        label="Password" 
        variant="filled" fullWidth 
        />
      </div>  
      <div>
      <TextField
        id="filled-basic"
        label="Designation"
        variant="filled" fullWidth
        />
         <FormControl variant="filled" sx={{ m: 2, minWidth: '35ch' }}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleChangeSelect}
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Do not wish to specify</MenuItem>
        </Select>
        </FormControl>
      </div>  

    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date of Joining"
          inputFormat="MM/DD/YYYY"
          value={doj}
          onChange={handleChangeDOJ}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="MM/DD/YYYY"
          value={dob}
          onChange={handleChangeDOB}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    </div>
      
      <div>
        <TextField
        id="filled-number"
        label="Contact Number"
        variant="filled" fullWidth
        />
        <TextField 
        id="filled-basic" 
        label="Address" 
        variant="filled" fullWidth 
        />
        </div>
        <div>
        <TextField
        id="filled-basic"
        label="City"
        variant="filled" fullWidth
        />
        <TextField 
        id="filled-basic" 
        label="State" 
        variant="filled" fullWidth 
        />
        </div>
        <div>
        <TextField
        id="filled-basic"
        label="Country"
        variant="filled" fullWidth
        />
        <TextField 
        id="filled-number" 
        label="Zip code" 
        variant="filled" fullWidth 
        />
        </div>
        <div>
        <Button variant="contained" disabled>
            Update
        </Button>
        </div>
  </Box>
      
      
      
      
      </></>
    )
}
export default EmployeeDetails;