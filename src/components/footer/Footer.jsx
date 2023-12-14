import React from 'react';
import { InstagramFilled, LinkedinFilled, GithubOutlined } from '@ant-design/icons';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-header">ABOUT US</h3>
          <p>This is a project for collecting all events in one place.</p>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">CONTACT US</h3>
          <p>You are welcome!</p>
          <p>Email: <em>ar_sarsembek@kbtu.kz</em></p>
          <p>Location: <em>KBTU</em></p>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">SOCIAL MEDIA</h3>

          <ul className="social-media-links">
            <li>
              <a
                href="https://www.linkedin.com/in/arman-sarsembek-630745232/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
              >
                <LinkedinFilled />
              </a>

              <a
                href="https://github.com/sarsembek"
                target='_blank'
                rel='noopener noreferrer'
                className='social-media-link'
              >
                <GithubOutlined />
              </a>

              <a
                href="https://www.instagram.com/srsembek/"
                target='_blank'
                rel='noopener noreferrer'
                className='social-media-link'
              >
                <InstagramFilled />
              </a>

            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

