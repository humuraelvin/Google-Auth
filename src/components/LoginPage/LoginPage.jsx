import React from 'react'
import Logo from '../../assets/7123025_logo_google_g_icon.png'
import { signInWithGoogle } from '../../Firebase/Firebase.js'

const LoginPage = () => {

    const buttonIsClicked = () => {
        signInWithGoogle();
    }

  return (
    <div>
       <button onClick={buttonIsClicked} ><img src={Logo} alt="google" /> <h1>Sign In With Google</h1></button>
    </div>
  )
}

export default LoginPage
