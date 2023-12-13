import React, { useState } from 'react';
import { Space, Divider, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CustomDrawer from '../drawer/Drawer';

const AuthButtons = () => {
  const { currentUser, logout } = useAuth();
  const [open, setOpen] = useState(false);


  // If the user is authenticated, display their name
  if (currentUser) {
    return (
      <div>
        <CustomDrawer />
        <Button id='log' type='primary' style={{ background: "#758bfd", marginLeft: "1rem" }} onClick={logout}>Log Out</Button>
      </div>
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
