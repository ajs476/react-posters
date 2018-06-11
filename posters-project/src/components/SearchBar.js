import React from 'react';
const qhttp = require('q-io/http');

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @return {text} The sum of the two numbers.
*/
class SearchBar extends React.Component {
  /**
  * Render a textbox.
  * @return {input} return the textbox.
 */
  render() {
    return (
      <div className="movieSearch">
        <input className="movieSearchBox" type="text" placeholder="Search Movie on OMDB..."></input>
        <button className="movieSearchButton">Search</button>
      </div>
  );
  }
}

qhttp.read('http://www.omdbapi.com/?apikey=fd86ad97&t=guardians-of-the-galaxy')
.then(function(json) {
  let omdbResult = JSON.parse(json);
  let omdbResultTitle = omdbResult.Title;
  let omdbResultGenre = omdbResult.Genre;
  console.log(`Title: ${omdbResultTitle} | Genre: ${omdbResultGenre}`);
})
.then(null, console.error)
.done();

export default SearchBar;
