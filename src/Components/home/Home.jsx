import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className="home_hedder">
      <Link style={{color:"black",textDecoration:"none"}} to={`/new/karigar`}> <button className="message" type="button">Add Kariger +</button></Link>
      </div>
      <div className="home_section">
        
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
            <Link style={{color:"black",textDecoration:"none"}} to={`/karigar`}> <button className="message" type="button">See All</button></Link>
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
                <button>see all</button>
            </div>
        </div>
      </div>
       
    </div>
  )
}

export default Home
