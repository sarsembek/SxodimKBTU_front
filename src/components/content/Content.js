import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Card, List, Spin } from'antd';
import EventTag from "../tags/EventTag";
import NoData from "../error/NoData";


export const Content = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios.get('https://sxodim-kbtu.onrender.com/getEvents')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => { 
        console.error(error);
        setTimeout(5000);
        setLoading(false);
      });
  }, []);
    return (
      <div>
      {loading ? <div id="spin"><Spin size='large'/><p style={{color: "#27187e"}}>Loading Events</p></div > :
        <List
          grid={{
            gutter: 15,
            column: 3,
          }}
          dataSource={events}
          locale={{emptyText: <NoData />}}
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
      }
      </div>
    )
}