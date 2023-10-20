import React, { useState } from "react";
import { VideoCameraOutlined, PlaySquareOutlined, RocketOutlined, InsuranceOutlined, DesktopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Sidebar.css';

const items = [
    {
        label: 'Movies',
        key: 'movies',
        icon: <VideoCameraOutlined />
    },
    {
        label: 'Serials',
        key: 'serials',
        icon: <PlaySquareOutlined />
    },
    {
        label: 'Games',
        key: 'games',
        icon: <RocketOutlined />
    },
    {
        label: 'Anime',
        key: 'anime',
        icon: <InsuranceOutlined />
    },
    {
        label: 'Software',
        key: 'software',
        icon: <DesktopOutlined />
    }
]

export const Sidebar = () => {

    const [current, setCurrent] = useState('movies');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return(
        <Menu
            id='sidebar'
            onClick={onClick}
            selectedKeys={[current]}
            mode="vertical"
            items={items}
        />
    )
}