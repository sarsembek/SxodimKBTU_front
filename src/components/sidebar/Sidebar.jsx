import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Menu } from 'antd';
import './Sidebar.css';
import { TeamOutlined, 
         ToolOutlined, 
         HeartOutlined, 
         BookOutlined, 
         ThunderboltOutlined, 
         MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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

    const [current, setCurrent] = useState(null);
    const location = useLocation();

    const onClick = (e) => {
        setCurrent(e.key);
        onEventTypeChange(e.key);
    };

    useEffect(() => {
        // Extract eventType from the URL query parameters
        const urlParams = new URLSearchParams(location.search);
        const eventTypeFromUrl = urlParams.get('eventType');
    
        // Check if eventTypeFromUrl is in your items array
        const isEventTypeValid = items.some((item) => item.key === eventTypeFromUrl);
    
        // Set current to eventTypeFromUrl if valid, otherwise set it to null
        setCurrent(isEventTypeValid ? eventTypeFromUrl : null);
    }, [location.search]);

    return(
        <Menu
            id='sidebar'
            onClick={onClick}
            selectedKeys={[current]}
            mode="vertical"
        >   
            {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={`/event?eventType=${item.key}`}>{item.label}</Link>
                </Menu.Item>
            ))}

        </Menu>
    )
}