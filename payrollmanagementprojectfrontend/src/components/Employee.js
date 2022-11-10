import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useNavigate  } from 'react-router-dom';
import { Container ,Paper,Button,ImageList,ImageListItem} from '@material-ui/core';
import {  EmojiPeople } from '@material-ui/icons';
import PropTypes from 'prop-types';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

async function loginUser(credentials) {
  
  return fetch('http://localhost:8080/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
   
 }
 


  Employee.propTypes = {
    setToken: PropTypes.func.isRequired
  }
 export default function Employee(setToken) {
  const navigate = useNavigate();
  
    const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPE2J3E2nsdsqAg1208dYcq_JobxeDc7NNcZeoNohrt43c9kDDt0R0biUtJATEI91Ez8&usqp=CAU',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FHRjmz2fMHMIK9LyJojvO8bxL0z8BRGOzw&usqp=CAU',
   
   
  },
  {
    img: 'https://asksonnie.info/wp-content/uploads/2016/04/Salaries.jpg',
    
  },
  {
    img: 'https://fuzeinteriors.co.nz/wp-content/uploads/2016/07/teamwork-e1469424129768.jpg',
   
  },
  {
    img: 'https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/CSFCMSEN/sz_kagxabecmv31f4ikxhq.jpg',
    
  },
  
  {
    img: 'https://avatel.files.wordpress.com/2012/07/collaboration1.jpg',
   
  },
      ];

    
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [usertype, setUserType] = useState();
    const[employees,setEmployees]=useState([])
    const classes = useStyles();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        name,
        email,
        password,
        usertype
      });
      setToken(token);
    }

  const handleLogin=(e)=>{
    e.preventDefault()
    const emp={name,email,password}
    console.log(EmojiPeople)
    fetch("http://localhost:8080/employee/validate",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(emp)

  }).then(()=>{
    console.log("New Employee added")
  })
  navigate ('/dashboard')
}

useEffect(()=>{
  fetch("http://localhost:8080/employee/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setEmployees(result);
  }
)
},[])
  return ( 
    <>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: "blue" }}><u>Login</u></h1>

          <form className={classes.root} noValidate autoComplete="off" >

            <TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)} />
              <TextField id="outlined-basic" label="email" variant="outlined" fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <TextField id="outlined-basic" type ="password"  variant="outlined" fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
              <div>
              <input type="radio" name="UserType" value="employee" onChange={e => setUserType(e.target.value)} /> Employee
              <input type="radio" name="UserType" value="employer" onChange={e => setUserType(e.target.value) }/> Employer
              </div>
            <Button variant="contained" color="secondary" onClick={handleLogin} >
              Submit
            </Button>
          </form>

        </Paper>
        <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={250}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>

      </Container></>
      
  );

  
}
