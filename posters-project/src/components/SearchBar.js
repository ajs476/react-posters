import React from 'react';


const SearchBar = ({updateInputValue, onSearch, input}) => (
    <div className="movieSearch">
      <input className="movieSearchBox" type="text" placeholder="Lookup Movie on OMDb..." value={input}
        onChange={updateInputValue}>
      </input>
      <button className="movieSearchButton" onClick={onSearch}>Search</button>
    </div>
);


export default SearchBar;
