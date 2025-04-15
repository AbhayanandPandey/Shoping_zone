import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
const Signup = () => {
  return (
    <div className='addUser'>
      <h3>Sign Up</h3>
      <form action="" className='addUserForm'>
        <div className="inputGroup">
          <label htmlFor="username">Name:</label>
          <input 
          type="text" 
          id='username' 
          placeholder='Enter your Username' 
          autoComplete='off'
          />
          <label htmlFor="useremail">Email:</label>
          <input 
          type="email" 
          id='useremail' 
          placeholder='Enter your Email' 
          autoComplete='off'
          />
          <label htmlFor="userpassword">Passwod:</label>
          <input 
          type="password" 
          id='useremail' 
          placeholder='Enter your Password' 
          autoComplete='off'
          />
          <button type="button" class="btn btn-success">SignUp</button>
        </div>
      </form>
      <div className="login">
        <p>Already have an account?</p>
        <Link to="/Login" type="submit" class="btn btn-primary">Login
        </Link>
      </div>
      <div className="login mt-1" >
        <Link to="/" type="submit" class="btn btn-warning">Home
        </Link>
      </div>
    </div>
  )
}

export default Signup
