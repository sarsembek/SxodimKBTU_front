import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { AutoComplete } from "antd";
import './SearchField.css';


export const SearchField = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/getEvents')
    .then(response => response.data)
    .then(data => {
      const transformedData = data.map(event => ({
        value: event.id,
        name: event.name,
        eventType: event.event,
        label: event.name,
      }));
      setEvents(transformedData);
      console.log(transformedData);
    })
    .catch(error => console.error(error));
  }, []);
  
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearch = (query) => {
    const results = events.filter((event) => event.name.toLowerCase().includes(query.toLowerCase()));
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