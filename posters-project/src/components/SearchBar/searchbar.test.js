import React from 'react';
import SearchBar from './SearchBar.js';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  shallow(<SearchBar />);
});

it('calls onChange event when searchBar is changed', () => {
  const onChange = jest.fn();
  let wrapper = mount(<SearchBar updateInputValue={onChange}/>);
  wrapper.find('input.movieSearchBox').simulate('change');
  expect(onChange).toBeCalled();
});

it('calls onClick event on click of search button', () => {
  const onClick = jest.fn();
  let wrapper = mount(<SearchBar onSearch={onClick}/>);
  wrapper.find('button.movieSearchButton').simulate('click');
  expect(onClick).toBeCalled();
});
