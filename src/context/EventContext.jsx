import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://sxodim-kbtu.onrender.com/getEvents');
            const eventsWithDate = response.data.map(event => ({
              ...event,
              date: format(new Date(event.date), "MMMM d, yyyy HH:mm"),
            }));
            setEvents(eventsWithDate);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    }, []);

    const getEventById = (eventId) => {
        return events.find((event) => event.eventID === Number(eventId))
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