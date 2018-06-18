import React from 'react';
import App from './App.js';
import PosterList from './components/PosterList/PosterList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchHistory from './components/SearchHistory/SearchHistory.js';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders correct amounts of <SearchBar />, <SearchHistory />, and <PosterList /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PosterList).length).toBe(1);
    expect(wrapper.find(SearchBar).length).toBe(1);
    expect(wrapper.find(SearchHistory).length).toBe(1);
});

it('clears searchHistory array when clearHistory method is called', () => {
  let wrapper = mount(<App />);
  let testHistoryState = {
    searchHistory: ['history1', 'history2'],
  };
  wrapper.setState(testHistoryState);
  wrapper.instance().clearHistory();
  expect(wrapper.state('searchHistory')).toEqual([]);
});

it('removes the last item from the array if the array length is greater than or equal to MAX_SEARCH_HISTORY', () => {
  let wrapper = mount(<App />);
  const MAX_SEARCH_HISTORY = 10;
  let testHistoryState = {
    searchHistory: ['history1', 'history2', 'history3', 'history4', 'history5',
     'history6', 'history7', 'history8', 'history9', 'history10', 'history11'],
  };
  wrapper.setState(testHistoryState);
  wrapper.instance().manageHistoryLength((wrapper.state('searchHistory')));
  expect(wrapper.state('searchHistory').length).toBeLessThanOrEqual(MAX_SEARCH_HISTORY);
});
