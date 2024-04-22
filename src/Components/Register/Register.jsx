import React, { useState } from 'react';
import "./register.css";
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate(); 

  // Update state with input field values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // console.log(formData)
    try {
      const response = await fetch('http://localhost:4040/api/v1/auth/adminRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log("response",response);
      console.log("data",data.success) 
      
      if (data.success === true) {
        console.log("registered success")
        navigate('/auth/login')
      } else {
        
        console.error('Registration failed:', data.message);
      }
     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="center">
      <h1>Admin Register</h1>
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
        <input type="submit" value="Register" />
        <div className="signup_link">Not a member? <a href="#">Signup</a></div>
      </form>
    </div>
  );
}

export default Register;
