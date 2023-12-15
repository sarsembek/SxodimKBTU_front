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
        key: 'LECTURE',
        icon: <BookOutlined />
    },
    {
        label: 'Workshop',
        key: 'WORKSHOP',
        icon: <ToolOutlined />
    },
    {
        label: 'Social Event',
        key: 'SOCIAL_EVENT',
        icon: <HeartOutlined />
    },
    {
        label: 'Conference',
        key: 'CONFERENCE',
        icon: <TeamOutlined />
    },
    {
        label: 'Party',
        key: 'PARTY',
        icon: <ThunderboltOutlined />
    },
    {
        label: 'Other',
        key: 'OTHER',
        icon: <MoreOutlined />
    }
]

export const Sidebar = () => {

    const [current, setCurrent] = useState('LECTURE');

    const onClick = (e) => {
        setCurrent(e.key);
        onEventTypeChange(e.key);
    };

    return(
        <Menu
            id='sidebar'
            onClick={onClick}
            selectedKeys={[current]}
            mode="vertical"
        >   
            {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                </Menu.Item>
            ))}

        </Menu>
    )
}