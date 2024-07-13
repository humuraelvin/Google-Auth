import React from 'react'

const HomePage = () => {

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email")
    const profilePic = localStorage.getItem("profilePicture")

  return (
    <div>
      <h1 className='title'>Thank You, For You have successfully signed In</h1>
      <div className='details'>
        <h1>Your username is {name}</h1>
        <h1>Your email is {email}</h1>
        <img src={profilePic} alt="" />
      </div>
    </div>
  )
}

export default HomePage
