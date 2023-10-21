  // src/components/Header.js
import React from 'react';
import { Layout, Button, Space, Divider } from 'antd';
import { SearchField } from '../search/SearchField';
import logo from '../assets/radar.png';
import './Header.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export const AppHeader = () => {
  return (
    <Header className="app-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }}
    >
        <div className='logo'>
            <img className='logo' src={logo} alt='logo'/>
        </div>
        <SearchField
          id='search'
        />
        <Space 
          className='reg-block'
          split={<Divider type="vertical" style={{height: '2rem', background: 'white'}}/>}
        >
          <Link to="/login">
            <Button id='log' type='primary'style={{background:"#38a3a5"}}>Log In</Button>
          </Link>

          <Link to="/register">
            <Button id='reg' ghost>Register</Button>
          </Link>
        </Space>
    </Header>
  );
};

export default AppHeader;
