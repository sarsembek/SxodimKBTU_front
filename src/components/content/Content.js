import React from "react";
import { Card, List } from'antd';
import './Content.css';

const torrents = [
    {
      id: 1,
      name: 'Torrent 1',
      magnetLink: 'magnet:?xt=urn:btih:1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF',
    },
    {
      id: 2,
      name: 'Torrent 2',
      magnetLink: 'magnet:?xt=urn:btih:234567890ABCDEF1234567890ABCDEF1234567890ABCDEF',
    },
  ];

export const Content = () => {
    return (
    <List
        id="list"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={torrents}
        renderItem={(item) => (
          <List.Item>
            <Card 
            title={item.name}
            id="card"
            hoverable
            >{item.magnetLink}</Card>
          </List.Item>
        )}
    />
    )
}