import React, { useState } from "react";
import { HomeFilled, DownloadOutlined, CheckCircleOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu, Divider } from 'antd';
import './Navbar.css'

const items = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeFilled />
    },
    {
        label: 'Upload',
        key: 'upload',
        icon: <DownloadOutlined />
    },
    {
        label: 'Rules',
        key: 'rules',
        icon: <CheckCircleOutlined />
    },
    {
        label: 'Contact',
        key: 'contact',
        icon: <MailOutlined />
    },
    {
        label: 'About Us',
        key: 'about_us',
        icon: <TeamOutlined />
    }
]

export const Navbar = () => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Menu
            split={<Divider type="vertical" />}
            id='navbar' 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={items} 
        />
    )
}