  // src/components/Header.js
import React from 'react';
import { Layout, Button, Space, Divider } from 'antd';
import logo from './radar.png';
import './Header.css'

const { Header } = Layout;

export const AppHeader = () => {
  return (
    <Header className="app-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
        <div className='logo'>
            <img className='logo' src={logo} alt='logo'/>
        </div>
        <Space 
          className='reg-block'
          split={<Divider type="vertical" style={{height: '2rem', background: 'white'}}/>}
        >
          <Button id='log' type='primary'style={{background:"#38a3a5"}}>Log In</Button>
          <Button id='reg' ghost>Register</Button>
        </Space>
    </Header>
  );
};

export default AppHeader;
