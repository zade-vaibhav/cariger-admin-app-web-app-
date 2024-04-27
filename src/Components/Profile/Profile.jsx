import React, { useState, useEffect } from 'react';
import "./profile.css";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';

function Profile() {
    const location = useLocation();
    const dataa = location.state ? location.state.detail : null;
    const name = location.state ? location.state.name : "";
    const designation = location.state ? location.state.designation : "";

    const [formData, setFormdata] = useState({
        name: dataa ? dataa.name : "",
        userName: "",
        designation: "",
        phoneNumber: "",
        address: "",
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Before handleChange formData:", formData);
        setFormdata(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log("After handleChange formData:", formData);
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
    }

    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (dataa) {
          setFormdata(prevState => ({
            ...prevState,
            name: name,
            designation: designation
          }));
        }
      }, [dataa, name, designation]);

    return (
        <div className="profile_Container">
            <div className='profile_Container_up'>
                <div className="box1 Profile_box">
                    <div className="content">
                        <div className="gradient"></div>
                        <div className="image">
                            <img src="https://i.postimg.cc/bryMmCQB/profile-image.jpg" alt="Profile Image"/>
                        </div>
                        <div className="level">
                            <p>4.5 ⭐</p>
                        </div>
                        <div className="text">
                            <p className="name">{name}</p>
                            <p className="job_title">lavor</p>
                            <p className="job_discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, ipsam a amet laboriosam eligendi.</p>
                        </div>
                        {/* <div className="icons">
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
                        </div> */}
                        <div className="button">
                            <div>
                                {edit === true ? <button style={{backgroundColor:"red",color:"white"}} className="message" onClick={() => setEdit(!edit)} type="button">Cancel</button> : <button className="message" onClick={() => setEdit(!edit)} type="button">Edit</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop:"4%",width:"80%"}} className='profile_Container_down'>
                {edit === true ?
                <div className="popup">
                  <div className="close-icon" onClick={() => setEdit(false)}>
        <IonIcon icon={close} />
    </div>
                    <form onSubmit={handleSubmit} className="form_container">

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Full Name</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} value={formData.name} type="text" id="fname" name="name" placeholder="Enter name.." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="lname">User Name</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} value={formData.userName} id="lname" name="userName" type="text" placeholder="username.." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="designation">Designation</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} value={formData.designation} id="designation" name="designation" type="text" placeholder="Designation.." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="country">Phone Number</label>
                            </div>
                            <div className="col-75">
                                <input onChange={handleChange} value={formData.phoneNumber} name="phoneNumber" id="country" type="text" placeholder="phoneNumber" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="subject">Address</label>
                            </div>
                            <div className="col-75">
                                <textarea onChange={handleChange} value={formData.address} name="address" id="subject" placeholder="Address" style={{ height: "200px" }}></textarea>
                            </div>
                        </div>

                        <div className="input-box">
                            <div className="col-25">
                                <label htmlFor="subject">Gender</label>
                            </div>
                            <div className="category">
                                <label htmlFor="dot-1" className={formData.gender === 'Male' ? 'selected' : ''}>
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                    <input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} />
                                </label>
                                <label htmlFor="dot-2" className={formData.gender === 'Female' ? 'selected' : ''}>
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                    <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} />
                                </label>
                                <label htmlFor="dot-3" className={formData.gender === 'Prefer not to say' ? 'selected' : ''}>
                                    <span className="dot three"></span>
                                    <span className="gender">Prefer not to say</span>
                                    <input type="radio" name="gender" value="Prefer not to say" onChange={handleChange} checked={formData.gender === 'Prefer not to say'} />
                                </label>
                            </div>
                        </div>

                        <div style={{ marginTop: "20px", marginLeft: "80%" }}>
                            <button type='submit' style={{
                                background: 'linear-gradient(45deg, blue, #CF9FFF)',
                                color: '#fff',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}>Submit</button>
                        </div>
                    </form>
                </div>
                : null}
            </div>
        </div>
    );
}

export default Profile;
