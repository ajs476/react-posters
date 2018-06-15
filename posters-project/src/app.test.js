import React from 'react';
import App from './App.js';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('searchHistory state is cleared when clearHistory method is called', () => {
  let wrapper = mount(<App />);
  let testHistoryState = {
    searchHistory: ['history1', 'history2'],
  };
  wrapper.setState(testHistoryState);
  wrapper.instance().clearHistory();
  expect(wrapper.state('searchHistory')).toEqual([]);
});

it('pops the last item from the array if the length is greater than or equal to MAX_SEARCH_HISTORY', () => {
  let wrapper = mount(<App />);
  const MAX_SEARCH_HISTORY = 10;
  let testHistoryState = {
    searchHistory: ['history1', 'history2', 'history3', 'history4', 'history5',
     'history6', 'history7', 'history8', 'history9', 'history10', 'history11'],
  };
  wrapper.setState(testHistoryState);
  wrapper.instance().manageHistoryLength((wrapper.state('searchHistory')));
  expect(wrapper.state('searchHistory').length).toBe(MAX_SEARCH_HISTORY);
});
