import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useEventContext } from '../../context/EventContext';
import EventTag from '../tags/EventTag';
import "./EventDetails.css";
import ErrorModal from '../error/ErrorModal';


const EventDetails = () => {
    const { loading, getEventById, registerUserToEvent, checking } = useEventContext();
    const { id } = useParams();
    const [ errorModalIsOpen, setErrorModalIsOpen ] = useState(false);
    const [error, setError] = useState('');
    const foundEvent = getEventById(Number(id));

    useEffect(() => {
        if(!loading) {
          const contentElement = document.getElementById('loading');
          contentElement.style.justifyContent = "flex-start";
        }
    },[]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!foundEvent) {
        return <p>Event not found</p>;
    }

    const onFinish = async () => {
        try {
          await registerUserToEvent(foundEvent.eventID);
          setErrorModalIsOpen(true);
        } catch (error) {
            setError(error)
            setErrorModalIsOpen(true);
            console.error('Event Registration Error:', error);
        }
    };
    

    return (
        <Spin
            id='loading'
            spinning={checking} 
            tip="Enrolling you into..."
            indicator={
              <LoadingOutlined 
                style={{
                  fontSize: 24,
                }}
              />
            }
        >
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
                    <Button onClick={onFinish} type="primary" style={{background: "#758BFD", width:"7rem", fontSize:"1.25rem", height: "2.5rem"}}>Register</Button>
                </Card>
            </div>
            <ErrorModal
                isOpen={errorModalIsOpen}
                onClose={() => setErrorModalIsOpen(false)}
                message={"You have already registered " + error.message || "You're successfully registered to event"}
                type="Event Registration Error"
            />
        </Spin>
    )
}

export default EventDetails;
