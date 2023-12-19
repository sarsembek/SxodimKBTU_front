import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, List, Spin, Button } from'antd';
import EventTag from "../tags/EventTag";
import NoData from "../error/NoData";
import { useEventContext } from "../../context/EventContext";



export const Content = () => {
  const { events, loading }= useEventContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventTypeFromUrl = queryParams.get('eventType')?.toUpperCase();
  
  useEffect(() => {
    if(loading || !events.length) {
      const contentElement = document.getElementById('content');
      contentElement.style.justifyContent = "center";
    }
    else {
      const contentElement = document.getElementById('content');
      contentElement.style.justifyContent = "flex-start";
    }
  },[loading]);

  // Function to sort events based on eventType
  const sortEventsByType = (events, eventType) => {
    return events.filter((event) => event.eventType === eventType);
  };

  const sortedEvents = eventTypeFromUrl
    ? sortEventsByType(events, eventTypeFromUrl)
    : events;

  const columnCount = sortedEvents.length < 3 ? sortedEvents.length : 3;

  return (
    <div>
    {loading ? <div id="spin"><Spin size='large'/><p style={{color: "#27187e"}}>Loading Events</p></div > :
      <List
        style={{
          minWidth: "inherit"
        }}
        grid={{
          gutter: 15,
          column: columnCount,
        }}
        dataSource={sortedEvents}
        locale={{emptyText: <NoData />}}
        renderItem={(item) => (
          <List.Item>
            <Card 
              title={item.name}
              extra={<EventTag 
                eventType={item.eventType}/>}
              style={{
                minHeight: "13rem",
                maxWidth: "100%"
              }}
            >
              <p style={{minHeight: "3rem"}}>{item.description}</p>
              <Link to={`/event/${item.eventID}`}>
                <Button type="primary" style={{background: "#aeb8fe"}}>Explore</Button>
              </Link>
            </Card>
          </List.Item>
        )}
      >
      </List>
    }
    </div>
    )
}