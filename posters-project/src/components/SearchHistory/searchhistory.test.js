import React from 'react';
import SearchHistory from './SearchHistory.js';
import {shallow, mount} from 'enzyme';

let testHistoryItems = [['title', 'genre', 'posterImageURL', 'userImageURL'], ['title', 'genre', 'posterImageURL', 'userImageURL']];


it('renders without crashing', () => {
  shallow(<SearchHistory searchHistory={testHistoryItems}/>);
});

it('calls onClick event on click of clear button', () => {
  const onClick = jest.fn();
  let wrapper = mount(<SearchHistory searchHistory={testHistoryItems} clearHistory={onClick}/>);
  wrapper.find('button.searchHistoryButton').simulate('click');
  expect(onClick).toBeCalled();
});
