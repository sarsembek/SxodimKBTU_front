import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://sxodim-kbtu.onrender.com/getEvents');
            setEvents(response.data);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    }, []);

    const getEventById = (eventId) => {
        return events.find((event) => event.event_id === eventId) || null;
    };

    return (
        <EventContext.Provider value={{ events, loading, getEventById }}>
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