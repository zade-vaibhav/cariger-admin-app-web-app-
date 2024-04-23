import React from 'react';
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <div className='navbar'>
      <div className="nav_logo">Carigar</div>
      <div className="menu">
        <ul className='menu_ul'>
            <li><Link to={"/"} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to={"/Karigar"} className={location.pathname === '/Karigar' ? 'active' : ''}>Karigar</Link></li>
            <li><Link to={"/tutorial"} className={location.pathname === '/tutorial' ? 'active' : ''}>Tutorial</Link></li>
            <li><Link to={"/auth/login"}><button>Login</button></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
