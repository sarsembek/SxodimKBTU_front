import React from "react";
import { List } from'antd';
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
        header="Torrent Files"
        itemLayout="horizontal"
        dataSource={torrents}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
                title={<p>{item.name}</p>}
                description={<p>{item.magnetLink}</p>}
            />
          </List.Item>
        )}
    />
    )
}