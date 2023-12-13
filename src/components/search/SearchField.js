import React from 'react';
import { AutoComplete } from "antd";
import './SearchField.css';
import { useEventContext } from '../../context/EventContext';


export const SearchField = () => {
  const { events } = useEventContext();
  const transformedEvents = events.map((event) => ({
    value: event.id,
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
      options={searchResults}
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