import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { useAuth } from './AuthContext';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [userRegistrations, setUserRegistrations] = useState({});
    const [loading, setLoading] = useState(true);
    const { currentUser ,userID } = useAuth();
    const [checking, setChecking] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://sxodim-kbtu.onrender.com/getEvents');
            const eventsWithDate = response.data.map(event => ({
              ...event,
              date: format(new Date(event.date), "MMMM d, yyyy HH:mm"),
            }));
            setEvents(eventsWithDate);
            if(currentUser) {
              const userRegistrationsResponse = await axios.get('https://sxodim-kbtu.onrender.com/getUserRegistrations', {
                  params: {
                      userID,
                  },
              });
              setUserRegistrations(userRegistrationsResponse.data);
              console.log(userRegistrations)
            }
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    }, [currentUser]);


    const getEventById = (eventId) => {
        return events.find((event) => event.eventID === Number(eventId))
    };

    const registerUserToEvent = async(eventID) => {
      const url = 'https://sxodim-kbtu.onrender.com/registerUserToEvent';
      const data = {
        userID: userID,
        eventID: eventID,
      };
      try{
        setChecking(true);
        if(userRegistrations){
          const isRegistered = userRegistrations.events.some(element => element === eventID);
          console.log(isRegistered);
          if(isRegistered == false) {
            console.log(userID, eventID)
            const response = await axios.post(url, null, { params: data });
            userRegistrations.eventIDs.push(eventID);
            setChecking(false);
            // Handle the response as needed
            console.log('User successfully registered for the event:1', response.data);
          }
          else {
            setChecking(false);
            console.log('User is already registered for the event');
            return;
          }
        }
        else {
          const response = await axios.post(url, null, { params: data });
          userRegistrations.events.push(eventID);
          setChecking(false);
          console.log('User successfully registered for the event:2', response.data);
        }
      } catch (error) {
      // Handle errors
          setChecking(false);
          console.error('Error registering user for the event:', error);
          throw error; // You can rethrow the error or handle it based on your requirements
      }
    }
    const deleteRegistration = async(eventID) => {
      const url = 'https://sxodim-kbtu.onrender.com/registerUserToEvent';
      const data = {
        userID: userID,
        eventID: eventID,
      };
      try{
        setChecking(true);
        if(userRegistrations){
          const isRegistered = userRegistrations.eventIDs.some(element => element === eventID);
          console.log(isRegistered);
          if(isRegistered) {
            console.log(userID, eventID)
            const response = await axios.delete(`${url}?userID=${userID}&eventID=${eventID}`);
            const indexToRemove = userRegistrations.events.indexOf(eventID);
            if (indexToRemove !== -1) {
              userRegistrations.events.splice(indexToRemove, 1);
            }
            setChecking(false);
            // Handle the response as needed
            console.log('Event deleted', response.data);
          }
          else {
            setChecking(false);
            console.log('Problems');
            return;
          }
        }
        else {
          setChecking(false);
          console.log('deleted', response.data);
          return;
        }
      } catch (error) {
      // Handle errors
          setChecking(false);
          console.error('Error while deleting', error);
          throw error; // You can rethrow the error or handle it based on your requirements
      }
    }
    const value = {
      events,
      loading,
      getEventById,
      userRegistrations,
      registerUserToEvent,
      checking,
      deleteRegistration
    }

    return (
        <EventContext.Provider value={value}>
          {children}
        </EventContext.Provider>
    );
}

export const useEventContext = () => {
    const context = useContext(EventContext);
    if (!context) {
      throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};