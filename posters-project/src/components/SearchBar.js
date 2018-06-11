import React from 'react';
const qhttp = require('q-io/http');

/**
 * Use text in the textbox to search movie details using omdb api.
 * Called when movieSearchButton is clicked.
 * @param {1} searchTitle provided title of the movie to search.
*/
function searchOMDB(searchTitle) {
  qhttp.read(`http://www.omdbapi.com/?apikey=fd86ad97&t=${searchTitle}`)
  .then(function(json) {
    let omdbResult = JSON.parse(json);
    let omdbResultTitle = omdbResult.Title;
    let omdbResultGenre = omdbResult.Genre;
    let omdbResultPoster = omdbResult.Poster;
    alert(`Title: ${omdbResultTitle} | Genre: ${omdbResultGenre} | Poster: ${omdbResultPoster}`);
  })
  .then(null, Error)
  .done();
}

/**
*/
class SearchBar extends React.Component {
  /**
  */
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }
  /**
   * @param {1} changeEvent textbox change event
  */
  updateInputValue(changeEvent) {
    this.setState({
      inputValue: changeEvent.target.value,
    });
  }

  /**
   * Returns search box and button to page.
   * @return {div} div containing the searchbar and search button
  */
  render() {
    return (
      <div className="movieSearch">
        <input className="movieSearchBox" type="text" placeholder="Lookup Movie on OMDb..." value={this.state.inputValue}
          onChange={ (changeEvent) =>
            this.updateInputValue(changeEvent)
          }>
        </input>
        <button className="movieSearchButton" onClick={() => searchOMDB(this.state.inputValue)}>Search</button>
      </div>
  );
  }
}


export default SearchBar;
