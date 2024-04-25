// Footer.js
import React from 'react';
import './Footer.css'; // Make sure you have the corresponding CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footerUpper">
            <div className="uppercontent">
            <h2>Get hands on the  <span className='special'>Great Courses</span> you like</h2>
            </div>


            <div className="footericons">
<div className="footerHeading">
<h3>Follow us on
</h3>
</div>
<div className="sideicons">
    <FontAwesomeIcon  className='part3icon'icon={faGoogle} />
<FontAwesomeIcon  className='part3icon' icon={faInstagram} />
      <FontAwesomeIcon  className='part3icon' icon={faTwitter} />
      <FontAwesomeIcon   className='part3icon'icon={faFacebook} />
     
   
</div>
            </div>
        </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#"> <span className='green'>•</span> Courses</a></li>
            <li><a href="#"><span className='green'>•</span> Tutors</a></li>
            <li><a href="#"><span className='green'>•</span>Quiz & Tests</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#"><span className='green'>•</span> About</a></li>
            <li><a href="#"><span className='green'>•</span> Talk To Us</a></li>
            <li><a href="#"><span className='green'>•</span> Help</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact us</h4>
          <p>Address: 77 Indian St. Baltimore, MD 21206</p>
          <p>Phone: +3233-332-334</p>
          <p>Email: elearny@example.com</p>
        </div>

        
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2019 DesignThemes. All Rights Reserved.</p>
        <div className="footer-menu">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

