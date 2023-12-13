import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import UpdateProfile from '../updateProfile/UpdateProfile';
import { useAuth } from '../../context/AuthContext';
import './Drawer.css';

const CustomDrawer = () => {
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const { currentUser } = useAuth();
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const showChildrenDrawer = () => {
      setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
      setChildrenDrawer(false);
    };
    return (
    <>
        <Button type="link" onClick={showDrawer}>
            {currentUser.displayName || currentUser.email }
        </Button>
        <Drawer title="Account information:" width={400} closable={false} onClose={onClose} open={open}>
            <div>
                <p>
                    <span className="label">Name:</span> {currentUser.displayName}
                </p>
                <p>
                    <span className="label">Email:</span> {currentUser.email}
                </p>
            </div>
            <Button 
                type="primary" 
                onClick={showChildrenDrawer}
                style={{
                    background: "#758bfd"
                }}
            >
                <EditOutlined />
                Edit
            </Button>
            <Drawer
              title="Edit your account:"
              width={400}
              closable={false}
              onClose={onChildrenDrawerClose}
              open={childrenDrawer}
            >
                <UpdateProfile />
            </Drawer>
        </Drawer>
    </>
  );
};

export default CustomDrawer;