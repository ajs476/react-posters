import React from 'react';
import PosterList from './components/PosterList.js';
import SearchBar from './components/SearchBar.js';
import Poster from './components/Poster.js';
import posterData from './data/poster-data.json';
const qhttp = require('q-io/http');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: posterData,
      inputValue: '',
      statusMessage: '',
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateMovies(results) {
    this.setState({movies: results});
  }

  updateInputValue(changeEvent) {
    this.setState({
      inputValue: changeEvent.target.value,
    });
  }

  searchOMDB(searchTitle) {
    if (searchTitle == '') {
      this.setState({statusMessage: 'Error: Search term required'});
      return;
    }
    qhttp.read(`http://www.omdbapi.com/?apikey=fd86ad97&s=${searchTitle}`)
    .then((results) => {
      let omdbResult = JSON.parse(results);
      if (omdbResult.Response === 'False') {
        this.setState({statusMessage: `Error: ${omdbResult.Error}`});
        return;
      }
      let formattedResults = omdbResult.Search.map(({Title: title, Year: genre, Poster: posterImageURL}) =>
        ({title, genre, posterImageURL, userImageURL: posterImageURL})
      );
      this.updateMovies(formattedResults);
      this.setState({statusMessage: ''});
    })
    .catch((error) => this.setState({statusMessage: 'Error: Something went wrong. Please try again later.'}));
  }

  handleSearch() {
    const {movies, inputValue, statusMessage} = this.state;
    this.setState({statusMessage: 'Loading'}, () => this.searchOMDB(inputValue));
  }

  render() {
    const {movies, inputValue, statusMessage} = this.state;
    return (
    <section className="container">
      <p className="statusMessage">{statusMessage}</p>
      <SearchBar updateInputValue={this.updateInputValue} onSearch={this.handleSearch} input={inputValue}/>
      <PosterList movieList={movies}/>
    </section>
  );
  }
}

export default App;
