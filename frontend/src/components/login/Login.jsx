import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
  return (
    <div className='addUser'>
      <h3>Login</h3>
      <form action="" className='addUserForm'>
        <div className="inputGroup">
          
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
          <button type="button" class="btn btn-success">Login</button>
        </div>
      </form>
      <div className="signup">
        <p>New User?</p>
        <Link to="/Signup" type="submit" class="btn btn-primary">Signup
        </Link>
      </div>
      <div className="signup  mt-1">
              <Link to="/" type="submit" class="btn btn-primary">Home
              </Link>
            </div>
    </div>
  )
}

export default Login
