import React, { useEffect, useState } from 'react';
import "./home.css";
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../UserForm/UserForm'; 
import Footer from '../footer/footer';
import Navbar from '../Navbar/Navbar';
import img from '../../Assets/img5.jpg'
import image from '../../Assets/img3.jpg'
import imag from '../../Assets/img4.jpg'
import Login from '../Login/Login';

function Home({ user }) {
  const [showForm, setShowForm] = useState(false);
  // const navigate = useNavigate();  

  // // useEffect(() => {
  // //   const isLoggedIn = localStorage.getItem('loggedIn') === 'false';
  // //   if (isLoggedIn) {
  // //     navigate(Login);
  // //   }
  // // }, []);
  const handleEdit = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='home'>
      <div className="home_hedder">
        <p className='ab'>Add <span>Karigar</span></p>
        <p className='text_ab'> Click 'Register' to join the session</p>
        <Link style={{color:"black",textDecoration:"none"}} to={`/new/karigar`}>
          <button className="message" type="button">Register Now</button>
        </Link>
        <div className="images">
    {/* Add your images here */}
    {/* <img className='aa' src={image} alt="Image 1" />
    <img className='bb' src={img} alt="Image 2" />
    <img className='cc' src={imag} alt="Image 3" /> */}
    {/* Add more images as needed */}
  </div>
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
            <h3>daniel</h3> {/* Display user's name */}
            <p></p> {/* Display user's location */}
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
