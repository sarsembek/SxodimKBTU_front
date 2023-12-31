import React, { useState } from 'react';
import { Space, Divider, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CustomDrawer from '../drawer/Drawer';
import { LogoutOutlined } from '@ant-design/icons';

const AuthButtons = () => {
  const { currentUser, logout } = useAuth();


  // If the user is authenticated, display their name
  if (currentUser) {
    return (
      <Space
        split={
          <Divider 
            type="vertical" 
            style={{ 
              height: '2rem', 
              background: '#758bfd' }} />}>
        <CustomDrawer />
        <Button id='log' type='default' style={{ marginLeft: "1rem" }} onClick={logout}><LogoutOutlined /></Button>
      </Space>
    );
  }
  if (currentUser === undefined) {
    // Handle the case where the value is still being initialized
    return <Spin />;
  }

  // If not authenticated, display login and register buttons
  return (
    <Space className='reg-block' split={<Divider type="vertical" style={{ height: '2rem', background: '#758bfd' }} />}>
      <Link to="/login">
        <Button id='log' type='primary' style={{ background: "#758bfd" }}>Log In</Button>
      </Link>

      <Link to="/register">
        <Button id='reg' ghost style={{ color: "#27187e", borderColor: "#27187e" }}>Register</Button>
      </Link>
    </Space>
  );
};

export default AuthButtons;
