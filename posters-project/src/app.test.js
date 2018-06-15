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
