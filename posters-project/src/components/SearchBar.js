import React from 'react';
const qhttp = require('q-io/http');


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.searchOMDB = this.searchOMDB.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(changeEvent) {
    this.setState({
      inputValue: changeEvent.target.value,
    });
  }

  searchOMDB(searchTitle) {
    qhttp.read(`http://www.omdbapi.com/?apikey=fd86ad97&t=${searchTitle}`)
    .then((results) => {
      let omdbResult = JSON.parse(results);
      this.props.updateMovies({title: omdbResult.Title, genre: omdbResult.Genre, posterImageURL: omdbResult.Poster, userImageURL: omdbResult.Poster});
    })
    .then(null, Error)
    .done();
  }

  render() {
    const {inputValue} = this.state;
    return (
      <div className="movieSearch">
        <input className="movieSearchBox" type="text" placeholder="Lookup Movie on OMDb..." value={inputValue}
          onChange={this.updateInputValue}>
        </input>
        <button className="movieSearchButton" onClick={() => this.searchOMDB(inputValue)}>Search</button>
      </div>
  );
  }
}


export default SearchBar;
