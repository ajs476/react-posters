import React from 'react';
import Poster from './Poster.js';


const PosterList = ({movieList}) => (
  <div>
    {
      movieList.map(({title, genre, posterImageURL, userImageURL}, i) =>
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
