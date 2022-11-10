import React, {  useState } from 'react';
import { Container ,Paper,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { EmojiPeople } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate   } from 'react-router-dom';



export default function RegisterUser() {

  const navigate = useNavigate();

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const classes = useStyles();

    const handleRegister=(e)=>{
      e.preventDefault()
      const emp={name,password,email}
      console.log(EmojiPeople)
      fetch("http://localhost:8080/employee/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(emp)
  
    }).then(()=>{
      console.log("New Employee has been registered")
    })
    navigate ('/login')
  }

  return ( 
<Container>
        <Paper elevation={3} style={paperStyle}>
    <form className={classes.root} noValidate autoComplete="off">

    <TextField id="outlined-basic" label="Enter User Name" variant="outlined" fullWidth
      value={name}
      onChange={(e) => setName(e.target.value)} />
    <TextField id="outlined-basic" label="Enter Password" variant="outlined" fullWidth
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
    <Button variant="contained" color="secondary" onClick={handleRegister}>
      Register
    </Button>
  </form>
  </Paper>
  </Container>
  );
}
