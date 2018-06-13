import React from 'react';

const SearchHistory = ({searchHistory}) => (
  <div className="searchHistory">Search History:
    {searchHistory.map((prevSearch) => ' '+ prevSearch +' ')}
    <input type="button" value="Clear"></input>
  </div>
);

export default SearchHistory;
