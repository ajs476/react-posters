import React from 'react';
import PosterList from './PosterList.js';
import {shallow} from 'enzyme';

it('renders without crashing', () => { // eslint-disable-line no-undef
  shallow(<PosterList movieList={['testItem', 'testItem']}/>);
});
