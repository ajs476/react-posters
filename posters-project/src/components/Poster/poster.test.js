import React from 'react';
import Poster from './Poster.js';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<Poster />);
});
