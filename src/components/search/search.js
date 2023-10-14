import './search.css'
import React, { useState } from 'react';
import { Input } from "antd";
const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);
export const SearchField = () => {
    return(
        <Search
          placeholder="Search for torrents"
          onSearch={onSearch}
          // loading={true}
          style={{
            width: 400
          }}
        />
    ) 

}
export default SearchField;