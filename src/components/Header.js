// src/components/Header.js
import React from 'react';
import { Layout} from 'antd';
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
    </Header>
  );
};

export default AppHeader;
