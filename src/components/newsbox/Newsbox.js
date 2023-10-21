import React from 'react';
import { Card } from 'antd';
import './Newsbox.css'

export const Newsbox = () => {
    return (
    <Card id='newscard'
      title="News"
      extra={<a href="#">More</a>}
      headStyle={{ 
        background: '#ced4da',
        borderBottom: '0.5px solid #B4B4B3', 
      }}
      bodyStyle={{
        background: 'white',
      }}
    >
      <div className='scrollable-content'>
        <p>Last update: 14.10.2023</p>
        <p>Added news box</p>
        <p><strong>Antd</strong></p>
        <p>React</p>
        <p>Routing</p>
        <p>CSS</p>
        <p>HTML</p>
        <p>JS</p>
      </div>
    </Card>
    )
};