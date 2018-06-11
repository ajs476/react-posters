import React from 'react';

const Poster = ({title, genre, posterImageURL, userImageURL}) => (
  <div className="media-item">
    <img className="poster-image" src={posterImageURL}></img>
    <div className="under-poster">
      <div className="under-poster-left">
        <div className="media-title">
          <h3>{title}</h3>
        </div>
        <div className="media-genre">
          <h4>{genre}</h4>
        </div>
      </div>
      <div className="under-poster-right">
        <img className="user-image" src={userImageURL}></img>
      </div>
    </div>
  </div>
);

export default Poster;
