import React, { useState } from 'react'
import "./profile.css"

function Profile() {
  
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
            {edit==true?<button style={{backgroundColor:"red",color:"white"}} className="message" onClick={()=>setEdit(!edit)} type="button">Cancel</button>:<button className="message" onClick={()=>setEdit(!edit)} type="button">Edit</button>}
           {edit==true?<button style={{backgroundColor:"greenyellow",color:"black"}} className="connect" onClick={()=>setEdit(!edit)} type="button">save</button>:<></>} 
          </div>
        </div>
      </div>
    </div>
      </div>


      <div style={{pointerEvents:edit==true?"":"none"}} className='profile_Container_down'>
      <div className="form_container">
  
    <div className="row">
      <div className="col-25">
        <label for="fname">First Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="country">Country</label>
      </div>
      <div className="col-75">
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="subject">Subject</label>
      </div>
      <div className="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      </div>
    </div>
    
</div>
      </div>
    

    
      </div>
  )
}

export default Profile

