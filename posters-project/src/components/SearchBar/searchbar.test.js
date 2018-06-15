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
