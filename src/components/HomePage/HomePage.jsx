import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email")
    const profilePic = localStorage.getItem("profilePicture")

    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
    }

  return (
    <div>
      <h1 className='title'>Thank You, For You have successfully signed In</h1>
      <div className='details'>
        <div>
            <h1>Your username is {name}</h1>
            <br /><br />
            <h1>Your email is {email}</h1>
        </div>
        <div>
            <img src={profilePic} alt="" />
        </div>
      </div>

        <div className='btn'>
            <button>
                logout
            </button>
        </div>

    </div>
  )
}

export default HomePage
