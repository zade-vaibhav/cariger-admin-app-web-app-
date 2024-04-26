// Home.jsx

import React, { useState } from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import UserForm from '../UserForm/UserForm'; 
import Footer from '../footer/footer';
import Navbar from '../Navbar/Navbar';

function Home({ user }) {
  const [showForm, setShowForm] = useState(false);

  const handleEdit = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='home'>
      <Navbar/>
      <div className="home_hedder">
        <Link style={{color:"black",textDecoration:"none"}} to={`/new/karigar`}>
          <button className="message" type="button">Add Kariger</button>
        </Link>
      </div>
      <div className="home_section">
        
        {/* Existing Cards */}
        <div className="card">
          <div className="text">
            <img src="https://img.freepik.com/premium-photo/labor-day-dedication-inspiring-dedicated-workaholics-labors-labor-day-photos-illustrations_978786-1270.jpg" alt=""/>
            <h3>Karigar</h3>
            <p>Delhi</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut.
            </p>
          </div>
          <div className="links">
            <Link style={{color:"black",textDecoration:"none"}} to={`/karigar`}>
              <button className="message" type="button">See All</button>
            </Link>
          </div>
        </div>
        
        <div className="card">
          <div className="text">
            <img src="https://img.freepik.com/premium-photo/group-people-are-standing-row-one-them-has-smile-his-face_867452-540.jpg" alt=""/>
            <h3>Costumers</h3>
            <p>Delhi</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut.
            </p>
          </div>
          <div className="links">
          <Link style={{color:"black",textDecoration:"none"}} to={`/karigar`}>
              <button className="message" type="button">See All</button>
            </Link>
          </div>
        </div>
        
        {/* User Card */}
        <div className="card">
          <div className="text">
            {/* <img src="https://example.com/user-image.jpg" alt="User"/> */}
            <h3>{user.name}</h3> {/* Display user's name */}
            <p>{user.location}</p> {/* Display user's location */}
          </div>
          <div className="message">
            <button className="link" onClick={handleEdit}>Edit</button>
            <button className="link"onClick={() => setShowForm(true)}>Blacklist</button>
          </div>
        </div>
        
        {/* Edit User Form Popup */}
        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseForm}>&times;</span>
              <UserForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
        
      </div>
      <Footer />
    </div>
  )
}

export default Home;
