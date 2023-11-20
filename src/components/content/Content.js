import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Card, List } from'antd';
import EventTag from "../tags/EventTag";


export const Content = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getEvents')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);
    return (
      <List
        grid={{
          gutter: 15,
          column: 3,
        }}
        dataSource={events}
        renderItem={(item) => (
          <List.Item>
            <Card 
              title={item.name}
              extra={<EventTag eventType={item.eventType}/>}
            >
              <p>{item.description}</p>
            </Card>
          </List.Item>
        )}
      >

      </List>
    )
}