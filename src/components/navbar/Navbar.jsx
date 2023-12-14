import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { HomeFilled, DownloadOutlined, CheckCircleOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Navbar.css'
const items = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeFilled />,
        to: '/event'
    },
    {
        label: 'Upload',
        key: 'upload',
        icon: <DownloadOutlined />,
        to: '/upload'
    },
    {
        label: 'Rules',
        key: 'rules',
        icon: <CheckCircleOutlined />,
        to: '/rules'
    },
    {
        label: 'Contact',
        key: 'contact',
        icon: <MailOutlined />,
        to: '/contact'
    },
    {
        label: 'About Us',
        key: 'about_us',
        icon: <TeamOutlined />,
        to: '/about_us'
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
        id='navbar'
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        inlineIndent={100}
    >
        {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
        ))}
        </Menu>
    )
}