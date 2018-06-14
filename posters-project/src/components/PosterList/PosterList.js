import React from 'react';
import Poster from '../Poster/Poster.js';


const PosterList = ({movieList}) => (
  <div>
    {
      movieList.map(({title, genre, posterImageURL, userImageURL}, index) =>
      <Poster
        title={title}
        genre={genre}
        posterImageURL={posterImageURL}
        userImageURL={userImageURL}
        key={index}
        >
      </Poster>)
    }
  </div>
);


export default PosterList;
