import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

import dayjs from 'dayjs';

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


function AddEmployee() {

    const [doj, setDOJ] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [dob,setDOB] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [gender, setGender] = React.useState('');

    const handleChangeSelect = (event) => {
        setGender(event.target.value);
      };
    const handleChangeDOJ = (newValue) => {
        setDOJ(newValue);
      };
      const handleChangeDOB = (newValue) => {
        setDOB(newValue);
      };

  const classes = useStyles();
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '35ch' },
    }}
    noValidate
    autoComplete="off"
  >
    
      <div><h2>   </h2></div>
      <div>
        <Typography variant="h4" className={classes.title}>
        Add New Employee
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
        <TextField
        id="filled-number"
        label="Total Yearly Salary"
        variant="filled" fullWidth
        />
        <TextField 
        id="filled-number" 
        label="Hourly salary" 
        variant="filled" fullWidth 
        />
        </div>
        <div>
        <TextField
        id="filled-number"
        label="Gross Salary"
        variant="filled" fullWidth
        />
        <TextField 
        id="filled-number" 
        label="Net salary" 
        variant="filled" fullWidth 
        />
        </div>
        <div>
        <TextField
        id="filled-basic"
        label="Month Last Paid"
        variant="filled" fullWidth
        />
        <TextField 
        id="filled-number" 
        label="Annual Bonus" 
        variant="filled" fullWidth 
        />
        </div>
        <div>
        <Button variant="contained" >
            ADD
        </Button>
        </div>

  </Box>

  )
}

export default AddEmployee;