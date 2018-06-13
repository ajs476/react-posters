import React from 'react';

const SearchHistory = ({searchHistory, clearHistory}) => (
  <div className="searchHistory">
      <span>Previous Searches: </span>
        {searchHistory}
      <button className="searchHistoryButton" value="Clear" onClick={clearHistory}>Clear</button>
  </div>
);

export default SearchHistory;
