import React from 'react';
import { Row, Col, Card } from 'antd';
import './Footer.css';
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer-logo">
      <img src={logo} alt="Company Logo" id='logo' />
    </div>

  <Row gutter={16}>
    <Col span={8}>
      <Card className='card' title="About Us">
        <p>Download everything you want!</p>
      </Card>
    </Col>

    <Col span={8}>
      <Card className='card' title="Contact Info">
        <p>
          Address: 123 Main St<br />
          Phone: (555) 555-5555<br />
          Email: info@example.com
        </p>
      </Card>
    </Col>

    <Col span={8}>
      <Card className='card' title="Important Links">
        <ul>
          <li><a href="/services">Services</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </Card>
    </Col>
  </Row>
</footer>

  );
}

export default Footer;
