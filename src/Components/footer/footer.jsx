import React from 'react';
import './footer.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  const location = useLocation();

  return (
    <div className='footer' style={{ height: '150px' }}>
      <div className="footer_navbar">
        <div className="footer_logo">Carigar</div>
        <div className="option">
          <ul className='option_ul'>
            <li><Link to={"/Karigar"} id='a' className={location.pathname === '/Karigar' ? 'active' : ''}>Karigar</Link></li>
            <li><Link to={"/tutorial"} id='b' className={location.pathname === '/tutorial' ? 'active' : ''}>Tutorial</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer_social_icons">
        <FontAwesomeIcon className='a1' icon={faFacebookF} />
        <FontAwesomeIcon className='a2' icon={faTwitter} />
        <FontAwesomeIcon  className='a3'icon={faInstagram} />
        </div>

    </div>
  );
}

export default Footer;
