  // src/components/Header.js
import React from 'react';
import { Layout } from 'antd';
import { SearchField } from '../search/SearchField';
import logo from '../../assets/logo.png';
import './Header.css';
import AuthButtons from '../authButtons/AuthButtons';

const { Header } = Layout;

export const AppHeader = (events) => {
  return (
    <Header className="app-header"
      style={{
        top: 0,
        zIndex: 1,
      }}
    >
        <div className='logo'>
            <img className='logo' src={logo} alt='logo'/>
        </div>
        <SearchField
          id='search'
          events={events}
        />
        <AuthButtons className="btns"/>
    </Header>
  );
};

export default AppHeader;
