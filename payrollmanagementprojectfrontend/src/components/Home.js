import React from 'react';
import { useNavigate  } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()

    function  handleClick (){
        navigate ("/contacts")
    }
    return(
    <div>
            <button onClick ={handleClick}> click here </button>
    </div>
    )
}
