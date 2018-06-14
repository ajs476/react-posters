import React from 'react';
import SearchHistory from './SearchHistory.js';
import {shallow, mount} from 'enzyme';

let testHistoryItems = [['title', 'genre', 'posterImageURL', 'userImageURL'], ['title', 'genre', 'posterImageURL', 'userImageURL']];


it('renders without crashing', () => { // eslint-disable-line no-undef
  shallow(<SearchHistory searchHistory={testHistoryItems}/>);
});

it('calls onClick event on click of clear button', () =>{ // eslint-disable-line no-undef
  const onClick = jest.fn(); // eslint-disable-line no-undef
  let wrapper = mount(<SearchHistory searchHistory={testHistoryItems} clearHistory={onClick}/>);
  wrapper.find('button.searchHistoryButton').simulate('click');
  expect(onClick).toBeCalled(); // eslint-disable-line no-undef
});

it('search history is empty after clear button click', () =>{ // eslint-disable-line no-undef
  const onClick = jest.fn(); // eslint-disable-line no-undef
  let wrapper = mount(<SearchHistory searchHistory={testHistoryItems} clearHistory={onClick}/>);
  wrapper.find('button.searchHistoryButton').simulate('click');
  const afterClickText = wrapper.find('div.searchHistory').children().first().text();
  expect(afterClickText).toEqual('Search History: '); // eslint-disable-line no-undef
});
