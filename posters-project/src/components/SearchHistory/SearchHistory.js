import React from 'react';

const SearchHistory = ({searchHistory, clearHistory, visitHistory}) => (
  <div className="searchHistory">
      <span>Search History: </span>
        {searchHistory.map((item, index) =>
           <span className='historyLink' key={index} onClick={() => visitHistory(item)}>{item}</span>)
        }
      <button className="searchHistoryButton" value="Clear" onClick={clearHistory}>Clear</button>
  </div>
);

export default SearchHistory;
