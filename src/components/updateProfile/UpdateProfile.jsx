import React, { useState } from 'react';
import { firebase } from '../../firebase/firebase';
import { Button, Input, Spin, } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './UpdateProfile.css';

const UpdateProfile = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = async () => {
    try {
      setLoading(true);
      const user = firebase.auth().currentUser;

      if (user) {
        await user.updateEmail(newEmail);

        console.log('Email updated successfully!');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error updating email:', error.message);
    }
  };

  const handleChangePassword = async () => {
    try {
      setLoading(true);
      const user = firebase.auth().currentUser;

      if (user) {
        await user.updatePassword(newPassword);

        console.log('Password updated successfully!');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error updating password:', error.message);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      const user = firebase.auth().currentUser;

      if (user) {
        await user.updateProfile({
          displayName: displayName,
          // You can also update other profile fields like photoURL
        });
        setLoading(false);
        console.log('User profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating user profile:', error.message);
    }
  };

  return (
    <Spin
      className='loading'
      spinning={loading} 
      tip="Updating..."
      indicator={
        <LoadingOutlined 
          style={{
            fontSize: 24,
          }}
        />
      }
      >
      <div className='input-container'>
          <div className='inputs'>
              <Input
                type="email"
                placeholder="Enter new email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                />
              <Button onClick={handleChangeEmail}>Update Email</Button>   
          </div>
          <div className='inputs'>
              <Input.Password
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                />
              <Button onClick={handleChangePassword}>Update Password</Button>
          </div>
          <div className='inputs'>
              <Input
                type="text"
                placeholder="Enter new display name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                />
              <Button onClick={handleUpdateProfile}>Update Name</Button>
          </div>
      </div>
    </Spin>
  );
};

export default UpdateProfile;
