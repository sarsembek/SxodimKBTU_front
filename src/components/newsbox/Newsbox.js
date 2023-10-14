import React from 'react';
import { Card } from 'antd';
import './Newsbox.css'

export const Newsbox = () => (
    <Card id='newscard'
      title="News"
      extra={<a href="#">More</a>}
      style={{
        width: 250,
      }}
      headStyle={{ 
        background: '#ced4da',
        borderBottom: '0.5px solid #B4B4B3', 
      }}
      bodystyle={{
        background: 'white',
      }}
    >
      <p>Last update: 14.10.2023</p>
      <p>Added news box</p>
      <p><strong>Ormon</strong></p>
    </Card>
);