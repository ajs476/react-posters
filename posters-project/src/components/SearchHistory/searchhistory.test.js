import React from 'react';
import SearchHistory from './SearchHistory.js';
import {shallow} from 'enzyme';

it('renders without crashing', () => { // eslint-disable-line no-undef
  shallow(<SearchHistory searchHistory={['testItem, testItem']}/>);
});
