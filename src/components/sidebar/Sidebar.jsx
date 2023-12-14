import React, { useState } from "react";

import { Menu } from 'antd';
import './Sidebar.css';
import { TeamOutlined, 
         ToolOutlined, 
         HeartOutlined, 
         BookOutlined, 
         ThunderboltOutlined, 
         MoreOutlined } from "@ant-design/icons";

const items = [
    {
        label: 'Lecture',
        key: 'lecture',
        icon: <BookOutlined />
    },
    {
        label: 'Workshop',
        key: 'workshop',
        icon: <ToolOutlined />
    },
    {
        label: 'Social Event',
        key: 'social',
        icon: <HeartOutlined />
    },
    {
        label: 'Conference',
        key: 'conf',
        icon: <TeamOutlined />
    },
    {
        label: 'Party',
        key: 'party',
        icon: <ThunderboltOutlined />
    },
    {
        label: 'Other',
        key: 'other',
        icon: <MoreOutlined />
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