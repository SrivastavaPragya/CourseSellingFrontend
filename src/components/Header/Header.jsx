// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { faGoogle, faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header">
        <div className="HeaderUpperpart">
            <div className="iconpart1">
            <FontAwesomeIcon  className='part1icon'icon={faGoogle} />
      <FontAwesomeIcon  className='part1icon'icon={faTwitter} />
      <FontAwesomeIcon  className='part1icon'icon={faFacebookF} />
      <FontAwesomeIcon className='part1icon' icon={faYoutube} />

            </div>


            <div className="iconpart2">
            <div className="login">
    <FontAwesomeIcon  icon={faSignInAlt} /> <h3>Login</h3>
</div>

<div className="register">
    <FontAwesomeIcon icon={faUserPlus} /> <h3>Register</h3>
</div>
            </div>

        </div>

        <div className="HeaderLowerPart">
            <div className="logo">
<img src="/logo.webp" alt="" />
            </div>

            <div className="menu">
        <div className="menuItem"><a href="#">Home</a></div>
        <div className="menuItem"><a href="#">About</a></div>
        <div className="menuItem"><a href="#">Services</a></div>
        <div className="menuItem"><a href="#">Students</a></div>
        <div className="menuItem"><a href="#">Why us</a></div>
        <div className="menuItem"><a href="#">Courses</a></div>
        <div className="menuItem"><a href="#">Contact</a></div>
      </div>


      <div className="searchBar">
      <div className='search'>
  <FontAwesomeIcon icon={faSearch} className="fa" />
 <input type="text" placeholder='Search' />
</div>
        
      </div>

        </div>


       
       
      {/* <div className="logo">eLearni</div>
      <div className="menu">
        <div className="menuItem"><a href="#">Home</a></div>
        <div className="menuItem"><a href="#">About</a></div>
       
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search" className="input" />
        <button className="button login">Login</button>
        <button className="button register">Register</button>
        <button className="button buyNow">Buy now</button>
      </div> */}
      <div className="HeaderLowerPart">

      </div>
    </div>
  );
};

export default Header;
