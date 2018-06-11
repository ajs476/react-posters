import React from 'react';
import Poster from './Poster.js';
import posterData from '../data/poster-data.json';

const PosterList = () => (
  <div>
    {
      posterData.map(({title, genre, posterImageURL, userImageURL}, i) =>
      <Poster
        title={title}
        genre={genre}
        posterImageURL={posterImageURL}
        userImageURL={userImageURL}
        key={i}
        >
      </Poster>)
    }
  </div>
);

export default PosterList;
