import React from 'react';
import App from './App.js';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});
