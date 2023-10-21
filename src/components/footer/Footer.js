import React from 'react';
import './Footer.css';
import logo from '../assets/radar.png';

export const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <img src={logo} alt="Company Logo" />
      </div>

      <div className="footer-section" id="about-us">
        <h2>About Us</h2>
        <p>Download everything you want!</p>
      </div>

      <div className="footer-section">
        <h2>Contact Info</h2>
        <p>
          Address: 123 Main St<br />
          Phone: (555) 555-5555<br />
          Email: info@example.com
        </p>
      </div>

      <div className="footer-section">
        <h2>Important Links</h2>
        <ul>
          <li><a href="/services">Services</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;