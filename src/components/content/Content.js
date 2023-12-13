import React from "react";
import { Link } from "react-router-dom";
import { Card, List, Spin, Button } from'antd';
import EventTag from "../tags/EventTag";
import NoData from "../error/NoData";
import { useEventContext } from "../../context/EventContext";



export const Content = () => {
  const { events, loading }= useEventContext();

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
                extra={<EventTag 
                  eventType={item.eventType}/>}
                style={{
                  minHeight: "13rem",
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