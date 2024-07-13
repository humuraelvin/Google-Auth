import React from 'react'
import Logo from '../../assets/7123025_logo_google_g_icon.png'
import { signInWithGoogle } from '../../Firebase/Firebase.js'
import { useNavigate } from 'react-router-dom'


const buttonIsClicked = () => {
    signInWithGoogle();
    const navigate = useNavigate();
    navigate('/home');
}

const LoginPage = () => {


  return (
    <div>
       <button onClick={buttonIsClicked} ><img src={Logo} alt="google" /> <h1>Sign In With Google</h1></button>
    </div>
  )
}

export default LoginPage
