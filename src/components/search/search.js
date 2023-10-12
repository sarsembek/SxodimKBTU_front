
import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
export const searchField = () => {
    return(
        <Search
    placeholder="input search text"
    onSearch={onSearch}
    style={{
      width: 200,
      
    }}
  />
    ) 
}
export default searchField;