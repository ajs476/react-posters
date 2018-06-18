import React from 'react';
import PosterList from './PosterList.js';
import Poster from '../Poster/Poster.js';
import {shallow} from 'enzyme';

let testMovieList = [{title: 'movie1', genre: 'genre1', posterImageURL: 'url1', userImageURL: 'url1'},
  {title: 'movie2', genre: 'genre2', posterImageURL: 'url2', userImageURL: 'url2'},
  {title: 'movie3', genre: 'genre3', posterImageURL: 'url3', userImageURL: 'url3'}];

it('renders without crashing', () => {
  shallow(<PosterList movieList={testMovieList}/>);
});

it('renders correct amount of <Poster /> components', () => {
    const wrapper = shallow(<PosterList movieList={testMovieList}/>);
    expect(wrapper.find(Poster).length).toBe(testMovieList.length);
});
