import React from 'react';
import { useState } from 'react';


function Home() {

    const [showPassword, setShowPassword] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [showLogout, setShowLogout] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [info, setInfo] = useState({
      username: '',
      password: ''
    })

    const logoutOption = () => {
        setShowLogout(!showLogout)
    }

    const logout = () => {
        setLoggedIn(false)
        setShowLogout(false)
    }

    const handleTextChange = (e) => {
        setInfo({...info,[e.target.id]:e.target.value})
        console.log(info.username)
    }

    const togglePassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (info.username.length && info.password.length){
            setLoggedIn(true)
            setOpenModal(false)
        } else {
            alert('Please enter a valid username and password')
        }
    }

    return (
        <div className='home-container'>
        <div className='home'>
            <h2>Welcome to Natasha's Budget App🤑</h2>
        <form onSubmit={handleSubmit} className=
        "form">
        <label htmlFor="name">Name</label>
        <input
          id="item_name"
          type="text"
          placeholder="name"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleTextChange}
        />
        <label htmlFor='password'>Password</label>
        <input type={showPassword ? 'text' : 'password'} id='password' onChange={handleTextChange} /> 
        <button onClick={togglePassword}>{showPassword ? 'Hide Password' : 'Show Password'}</button> 
        <label htmlFor='password'>Confirm Password</label>
        <input 
        type={showPassword ? 'text' : 'password'} id='confirmPassword' 
        placeholder='Confirm Password'
        onChange={handleTextChange} 
        /> 
               
        <br />
        <button>Get Started</button>
      </form>
        </div>
        </div>
    );
}

export default Home;