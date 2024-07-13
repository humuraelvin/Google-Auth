import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/7123025_logo_google_g_icon.png';
import { signInWithGoogle } from '../../Firebase/Firebase.js';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    signInWithGoogle()
      .then((result) => {
        const user_name = result.user.displayName;
        const user_email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", user_name);
        localStorage.setItem("email", user_email);
        localStorage.setItem("profilePicture", profilePic);

        console.log("Navigating to home...");
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        <img src={Logo} alt="google" />
        <h1>Sign In With Google</h1>
      </button>
    </div>
  );
};

export default LoginPage;
