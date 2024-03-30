import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
    <div className="center">
   <h1>Admin Register</h1>
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
     <Link to={"/auth/login"}><input type="submit" value="Register" /></Link>
     <div className="signup_link">Not a member? <a href="#">Signup</a></div>
   </form>
 </div>
 </div>
  )
}

export default Register
