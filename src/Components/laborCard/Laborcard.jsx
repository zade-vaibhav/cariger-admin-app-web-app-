import React, { useState } from 'react';
import "./laborcard.css";
import { Link } from 'react-router-dom';
import axios from "axios";

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
      const response = await axios.post("YOUR_API_ENDPOINT_HERE", {
        userId: blacklistData.userId
      });
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
          <div className="icons">
            <button>
              <ion-icon name="logo-dribbble"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-instagram"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-twitter"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-linkedin"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-behance"></ion-icon>
            </button>
          </div>
          <div className="button">
            <div>
              <Link 
                style={{color: "black", textDecoration: "none"}}
                to={{
                  pathname: `/karigar/${data._id}`,
                  state: { detail: data } 
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
    <h3>Blacklist User</h3>
    <input 
      type="text" 
      name="userId"
      value={blacklistData.userId}
      onChange={handleChange}
    />
    <button onClick={handleBlacklist}>Blacklist</button>
    {blacklistData.success && <p>User blacklisted successfully!</p>}
    {blacklistData.error && <p className="error">Error: {blacklistData.error}</p>}
    <button onClick={() => setShowPopup(false)}>Cancel</button>
  </div>
)}

        </div>  
      </div>
    </section>
  );
}

export default Laborcard;
