import React, { useState,useEffect } from 'react';
import { Button, Drawer, List, Typography, Descriptions, Spin } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import UpdateProfile from '../updateProfile/UpdateProfile';
import { useAuth } from '../../context/AuthContext';
import './Drawer.css';
import { useEventContext } from '../../context/EventContext';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const CustomDrawer = () => {
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const { currentUser } = useAuth();
    const { userRegistrations, getEventById, loading, deleteRegistration, checking } = useEventContext();
    const [events, setEvents] = useState();
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          // Assuming you have a function to fetch multiple events by IDs
          const eventDetails = await Promise.all(userRegistrations.eventIDs.map((id) => getEventById(id)));
          setEvents(eventDetails);
          console.log(eventDetails);
        } catch (error) {
          console.error(error);
          // Handle error as needed
        }
      };
  
      fetchEvents();
    }, [userRegistrations]);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const showChildrenDrawer = () => {
      setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
      setChildrenDrawer(false);
    };
    const onFinish = async (eventID) => {
      try {
        await deleteRegistration(eventID);
      } catch (error) {
          console.error('Event Registration Error:', error);
      }
    };
    return (
    <>
        <Button type="link" onClick={showDrawer}>
            {currentUser.displayName || currentUser.email }
        </Button>
        <Drawer title="Account information:" width={400} closable={false} onClose={onClose} open={open}>
            <div>
                <p>
                    <span className="label">Name:</span> {currentUser.displayName}
                </p>
                <p>
                    <span className="label">Email:</span> {currentUser.email}
                </p>
            </div>
            <Button 
                type="primary" 
                onClick={showChildrenDrawer}
                style={{
                    background: "#758bfd"
                }}
            >
                <EditOutlined />
                Edit
            </Button>
            {loading ? (
              <div id="spin">
                <Spin size='large' />
                <p style={{ color: "#27187e" }}>Loading Events</p>
              </div>
            ) : (
                    <List
                      header={<Title level={5}>Your registrations</Title>}
                      dataSource={events}
                      renderItem={(event) => (
                        <List.Item key={event.eventID}>
                          <Descriptions title={event.name} layout='vertical'>
                            <Descriptions.Item label="Date">{event.date}</Descriptions.Item>
                            <Descriptions.Item label="Location">{event.address}</Descriptions.Item>
                          </Descriptions>
                          <div style={{
                            height: "5rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            }}>
                            <Link to={`/event/${event.eventID}`}>
                              <Button type="primary" style={{ background: "#758BFD" }}>More</Button>
                            </Link>
                            <Button danger onClick={() => onFinish(event.eventID)} loading={checking}>Remove</Button>
                          </div>
                        </List.Item>
                      )}
                    />
                  )
            }
            <Drawer
              title="Edit your account:"
              width={400}
              closable={false}
              onClose={onChildrenDrawerClose}
              open={childrenDrawer}
            >
                <UpdateProfile />
            </Drawer>
        </Drawer>
    </>
  );
};

export default CustomDrawer;