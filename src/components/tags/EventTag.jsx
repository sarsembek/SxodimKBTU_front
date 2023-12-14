import React from "react";
import { Tag } from 'antd';
import './EventTag.css';

const EventTypesColorMap = {
    LECTURE: 'blue',
    WORKSHOP: 'green',
    SOCIAL_EVENT: 'pink',
    CONFERENCE: 'purple',
    PARTY: 'orange',
    OTHER: 'gray',
  };

const EventTag = ({eventType}) => {
    const color = EventTypesColorMap[eventType];
    const newEventType = eventType.replace(/_/g, " ")
    return (
        <Tag id="tag" color={color}>{newEventType}</Tag>
    )
};

export default EventTag;