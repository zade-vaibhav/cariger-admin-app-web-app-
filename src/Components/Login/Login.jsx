import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
       <div className="center">
      <h1>Admin Login</h1>
      <form >
        <div className="txt_field">
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <Link to={"/auth/register"}><input type="submit" value="Login" /></Link>
        <div className="signup_link">Not a member? <a href="#">Signup</a></div>
      </form>
    </div>
    </div>
  )
}

export default Login
