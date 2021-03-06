import React from 'react';
import PosterList from './components/PosterList/PosterList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Poster from './components/Poster/Poster.js';
import SearchHistory from './components/SearchHistory/SearchHistory';
import posterData from './data/poster-data.json';
const qhttp = require('q-io/http');

const MAX_SEARCH_HISTORY = 10;
const SEARCH_URL = 'https://www.omdbapi.com/?apikey=fd86ad97&s=';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: posterData,
      inputValue: '',
      statusMessage: '',
      searchHistory: [],
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.visitHistory = this.visitHistory.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
  }

  clearHistory() {
    this.setState({searchHistory: []});
  }

  manageHistoryLength(inputValue, searchHistory) {
    if (searchHistory.length >= MAX_SEARCH_HISTORY) {
      searchHistory.pop();
    }
  }

  updateHistory(inputValue, searchHistory) {
    this.manageHistoryLength(inputValue, searchHistory);
    this.setState({searchHistory: [`(${inputValue})`, ...searchHistory]});
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
    if (searchTitle === '') {
      this.setState({statusMessage: 'Error: Search term required'});
      return;
    }
    qhttp.read(`${SEARCH_URL}${searchTitle}`)
    .then((results) => {
      let omdbResult = JSON.parse(results);
      if (omdbResult.Response === 'False') {
        this.setState({statusMessage: `Error: ${omdbResult.Error}`});
        return;
      }
      let formattedResults = omdbResult.Search.map(({Title: title, Year: genre, Poster: posterImageURL}) =>
        ({title, genre, posterImageURL, userImageURL: posterImageURL})
      );
      this.setState({statusMessage: ''}, () => this.updateMovies(formattedResults));
    })
    .catch((error) => this.setState({statusMessage: 'Error: Something went wrong. Please try again later.'}));
  }

  handleSearch() {
    const {inputValue, searchHistory} = this.state;
    this.updateHistory(inputValue, searchHistory);
    this.setState({statusMessage: 'Loading'}, () => this.searchOMDB(inputValue));
  }

  visitHistory(historyLink) {
    this.setState({statusMessage: 'Loading'}, () => this.searchOMDB(historyLink));
  }

  render() {
    const {movies, inputValue, statusMessage, searchHistory} = this.state;
    return (
    <section className="container">
      <p className="statusMessage">{statusMessage}</p>
      <SearchBar updateInputValue={this.updateInputValue} onSearch={this.handleSearch} input={inputValue}/>
      <SearchHistory searchHistory={searchHistory} clearHistory={this.clearHistory} visitHistory={this.visitHistory}/>
      <PosterList movieList={movies}/>
    </section>
  );
  }
}

export default App;
