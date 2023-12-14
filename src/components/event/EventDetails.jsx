import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography } from 'antd';
import { useEventContext } from '../../context/EventContext';
import EventTag from '../tags/EventTag';
import "./EventDetails.css";

const { Title, Text } = Typography;

const EventDetails = () => {
    const { loading, getEventById } = useEventContext();
    const { id } = useParams();
    const foundEvent = getEventById(Number(id));

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!foundEvent) {
        return <p>Event not found</p>;
    }
    

    return (
        <div id="event-container">
            <Card 
                title={<h2 style={{ fontSize: '24px' }}>{foundEvent.name}</h2>}
                extra={<EventTag 
                    eventType={foundEvent.eventType}
                />}
                style={{
                    color: "#27187e"
                }}
            >
                <p  className='txt' ><strong>Date: </strong>{foundEvent.date}</p>
                <p  className='txt' ><strong>Location: </strong>{foundEvent.address}</p>
                <p  className='txt' ><strong>Department: </strong>{foundEvent.departmentId}</p>
                <p  className='txt' ><strong>Organizer: </strong>{foundEvent.organizerId}</p>
                <p  className='txt' ><strong>Description: </strong>{foundEvent.description}</p>
            </Card>
        </div>
    )
}

export default EventDetails;
