import React, { useState } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [loggenIn,setLoggedIn] = useState(false)

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();  // Hook for navigating

  // Update state with input field values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(credentials)

    try {
      const response = await fetch('http://localhost:4040/api/v1/auth/adminLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      console.log(response)

      if (data.success) {
        setLoggedIn(true)
        navigate('/');  // Navigate to the home page on successful login
      } else {
        console.error('Login failed:', data.message);  
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="center">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input
            type="text"
            name="username"
            required
            onChange={handleChange}
          />
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">Not a member? <a href="#">Signup</a></div>
      </form>
    </div>
  );
}

export default Login;
