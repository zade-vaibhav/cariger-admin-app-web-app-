import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav_logo">carigar</div>
      <div className="menu">
        <ul className='menu_ul'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Karigar"}>Karigar</Link></li>
            <li><Link to={"/tutorial"} >Tutorial</Link></li>
            <li><Link to={"/auth/login"} ><button>login</button></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
