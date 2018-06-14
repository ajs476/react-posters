import React from 'react';
import SearchBar from './SearchBar.js';
import {shallow} from 'enzyme';

it('renders without crashing', () => { // eslint-disable-line no-undef
  shallow(<SearchBar />);
});
