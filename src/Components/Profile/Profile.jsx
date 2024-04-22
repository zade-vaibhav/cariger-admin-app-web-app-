import React, { useState } from 'react'
import "./profile.css"
import { useLocation } from 'react-router-dom';
import axios from "axios"

function Profile() {
  const location = useLocation();
  const dataa = location.state.detail;
  console.log("datafrom profile",dataa)
  
 const [formData,setFormdata] =useState({

  fullName:"",
  userName:"",
  phoneNumber:"",
  address:"",
  gender:""


})

const handleChange=(e)=>{
  const { name, value } = e.target;
        setFormdata(prevState => ({
            ...prevState,
            [name]: value
        }));
// console.log(formData)
}


const handleSubmit =async (e)=>{
  e.preventDefault()
  // console.log("formData",formData)

//   try{

//   }
}


  const [edit,setEdit]=useState(false)
  console.log(edit)
  return (
    <div className="profile_Container">
      <div className='profile_Container_up'>
      <div className="box1 Profile_box">
      <div className="content">
        <div className="image">
          <img src="https://i.postimg.cc/bryMmCQB/profile-image.jpg" alt="Profile Image"/>
        </div>
        <div className="level">
          <p>4.5 ⭐</p>
        </div>
        <div className="text">
          <p className="name">vaibhav</p>
          <p className="job_title">lavor</p>
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
            {edit===true?<button style={{backgroundColor:"red",color:"white"}} className="message" onClick={()=>setEdit(!edit)} type="button">Cancel</button>:<button className="message" onClick={()=>setEdit(!edit)} type="button">Edit</button>}
           {/* {edit==true?<button style={{backgroundColor:"greenyellow",color:"black"}} className="connect" onClick={()=>setEdit(!edit)} type="button">save</button>:<></>}  */}
          </div>
        </div>
      </div>
    </div>
      </div>

      <div style={{marginTop:"4%",width:"80%"}} className='profile_Container_down'>
      {edit==true ? 
      
      <form onSubmit={handleSubmit} className="form_container">
  
    <div className="row">
      <div className="col-25">
        <label for="fname">Full Name</label>
      </div>
      <div className="col-75">
        <input 
        onChange={handleChange}
        value={formData.fullName} type="text" id="fname" name="fullName" placeholder="Enter name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">User Name</label>
      </div>
      <div className="col-75">
        <input type="text" 
        onChange={handleChange} value={formData.userName}  id="lname" name="userName" placeholder="username.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="country">Phone Number</label>
      </div>
      <div className="col-75">
        <input id="country" type="text" 
        onChange={handleChange} value={formData.phoneNumber}  name="phoneNumber" placeholder="phoneNumber" />
       
        
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="subject">address</label>
      </div>
      <div className="col-75">
        <textarea id="subject"
        onChange={handleChange}  value={formData.address}  name="address" placeholder="Address" style={{height:"200px"}}></textarea>
      </div>

    </div>
    <div className="input-box">
    <span className="details">Gender</span>
    <select
       onChange={handleChange}
        value={formData.gender}  
        name="gender"            
        className="col-75"
    > <option value="" disabled selected></option> 
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="N/A">Prefer not to say</option>
    </select>
  
</div>

    <div style={{marginTop:"20px" ,marginLeft:"80%"}}>

    <button type='submit'> Submit</button>

    </div>
   
    
</form> : null }
    
      </div> 

    
      </div>
  )
}

export default Profile

