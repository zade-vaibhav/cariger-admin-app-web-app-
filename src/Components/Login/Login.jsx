import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import Home from '../home/Home';

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();  
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({}); // State to store user information

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (isLoggedIn) {
      navigate(Home); // Redirect to home page if already logged in
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Simulating login success
      // Replace this with actual login logic
      
      // Get the username entered by the user from the credentials state
      const { username } = credentials;
      
      const userData = {
        name: username, // Use the entered username as the name
        location: 'New York'
      };
      setUser(userData); // Set user data
      setLoggedIn(true); // Update loggedIn state
      localStorage.setItem('loggedIn', 'true'); // Set logged in status in localStorage
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  // Handle logout
  // const handleLogout = () => {
  //   // Perform logout logic here, if any
  //   setLoggedIn(false);
  //   localStorage.setItem('loggedIn', 'false'); // Set logged out status in localStorage
  //   navigate('/auth/login'); // Redirect to login page on logout
  // };

  // Render the home screen if logged in
  if (loggedIn) {
    return <Home user={user}  />;
  }

  // Render the login form if not logged in
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
