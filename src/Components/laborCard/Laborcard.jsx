import React, { useState } from 'react';
import "./laborcard.css";
import { Link } from 'react-router-dom';
import axios from "axios";
// import Footer from '../footer/footer';

function Laborcard(data) {
  const [showPopup, setShowPopup] = useState(false);
  const [blacklistData, setBlacklistData] = useState({
    userId: "",
    success: false,
    error: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlacklistData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBlacklist = async () => {
    try {
      //Add the correct API here
      const response = await axios.post('http://localhost:4040/api/v1/auth/users/blacklistlabour/' + data._id);
      console.log(response.data)
      console.log(response.data._id)
      console.log(response.data.blacklistData)
      setBlacklistData({ userId: "", success: true, error: "" });
      setShowPopup(false);
    } catch (error) {
      setBlacklistData({ ...blacklistData, error: error.message });
    }
  };
  
  
  return (
    <section>
      <div className="box1 box">
        <div className="content">
          <div className="image">
            <img src="https://i.postimg.cc/bryMmCQB/profile-image.jpg" alt="Profile Image"/>
          </div>
          <div className="level">
            <p>4.5 ⭐</p>
          </div>
          <div className="text">
            <p className="name">{data.data.name}</p>
            <p className="job_title">{data.data.designation}</p>
            <p className="job_discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, ipsam a amet laboriosam eligendi.</p>
          </div>
          
          <div className="button">
            <div>
            <Link 
  style={{color: "black", textDecoration: "none"}}
  to={{
    pathname: `/karigar/${data._id}`,
    state: { 
      detail: data,
      name: data.data.name, // Pass name data
      designation: data.data.designation // Pass designation data
    } 
  }}
>
  <button className="message" type="button">Profile</button>
</Link>

            </div>
            <div>
              <button className="connect" type="button">Orders</button>
            </div>
          </div>
          {/* Blacklist Button */}
          <div className="blacklist-button-container">
            <button className="blacklist-button" onClick={() => setShowPopup(true)}>Blacklist</button>
          </div>
          {/* Blacklist Popup */}
          {showPopup && (
            <div className="blacklist-popup">
              <h3>Are you sure you want to Blacklist the User?</h3>
              {/* <input 
                type="text" 
                name="userId"
                value={blacklistData.userId}
                onChange={handleChange}
              /> */}
              <button onClick={handleBlacklist}>Blacklist</button>
              {blacklistData.success && <p>User blacklisted successfully!</p>}
              {blacklistData.error && <p className="error">Error: {blacklistData.error}</p>}
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          )}
        </div>  
      </div>
      {/* Footer */}
      {/* <Footer /> */}
    </section>
  );
}

export default Laborcard;
