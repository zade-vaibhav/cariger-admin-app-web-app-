import React from 'react'
import "./laborcard.css"
import logo from "../../Assets/icon.png"
import profile from "../../Assets/profile.png"
import { Link } from 'react-router-dom'

function Laborcard(data) {
  console.log(data.data._id)

  const id =data.data._id
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
          <p className="name">{!data.name ? data.fullName : data.name }</p>
          <p className="job_title">{data.designation}</p>
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
      </div>  
    </div>
  
  
  </section>
  )
}

export default Laborcard
