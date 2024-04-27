import React from 'react';
import "./navbar.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, if any
    navigate(Login); // Redirect to login page on logout
  };

  return (
    <div className='navbar'>
      <div className="nav_logo">Carigar</div>
      <div className="menu">
        <ul className='menu_ul'>
            <li><Link to={"/"} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to={"/Karigar"} className={location.pathname === '/Karigar' ? 'active' : ''}>Karigar</Link></li>
            <li><Link to={"/tutorial"} className={location.pathname === '/tutorial' ? 'active' : ''}>Tutorial</Link></li>
            <li><a href="#" onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;