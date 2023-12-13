import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography } from 'antd';
import { useEventContext } from '../../context/EventContext';
import EventTag from '../tags/EventTag';

const { Title, Text } = Typography;

const EventDetails = () => {
    const { events, loading } = useEventContext();
    const { id } = useParams();
    const foundEvent = events.find((event) => event.eventID == id);

    useEffect(() => {
        const contentElement = document.getElementById('content');
        contentElement.style.justifyContent = "flex-start";
    },[]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!foundEvent) {
        return <p>Event not found</p>;
    }
    

    return (
        <Card 
            title={foundEvent.name}
            extra={<EventTag 
                eventType={foundEvent.eventType}
            />}
            >
            <Text strong>Event Name:</Text> {foundEvent.name}
            <br />
            <Text strong>Date:</Text> {foundEvent.date}
            <br />
            <Text strong>Location:</Text> {foundEvent.address}
            <br />
            <Text strong>Department:</Text> {foundEvent.departmentId}
            <br />
            <Text strong>Organizer:</Text> {foundEvent.organizerId}
            <br />
            <Text strong>Description:</Text> {foundEvent.description}
        </Card>
    )
}

export default EventDetails;
