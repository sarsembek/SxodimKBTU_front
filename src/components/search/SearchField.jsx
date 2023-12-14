import React from 'react';
import { AutoComplete } from "antd";
import './SearchField.css';
import { useEventContext } from '../../context/EventContext';
import { Link } from 'react-router-dom';


export const SearchField = () => {
  const { events } = useEventContext();
  const transformedEvents = events.map((event) => ({
    value: event.eventID,
    name: event.name,
    eventType: event.evenType, 
    label: event.name,
  }));
  
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearch = (query) => {
    const results = transformedEvents.filter((event) => event.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <AutoComplete
      options={searchResults.map((event) => ({
        value: event.value,
        label: (
          <Link to={`/event/${event.value}`}>
            <span>{event.name}</span>
          </Link>
        ),
      }))}
      onSearch={handleSearch}
      placeholder="Search..."
      allowClear="true"
      style={{
        overflow: "auto",
        height: "3rem",
        width: "22.5rem",
      }}
    />
  );
};
export default SearchField;