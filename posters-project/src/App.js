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
    };
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateMovies(results) {
    this.setState({movies: [results, ...posterData]});
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
      this.updateMovies({title: omdbResult.Title, genre: omdbResult.Genre, posterImageURL: omdbResult.Poster, userImageURL: omdbResult.Poster});
    })
    .then(null, Error)
    .done();
  }

  render() {
    const {movies, inputValue} = this.state;
    return (
    <section className="container">
      <SearchBar updateInputValue={this.updateInputValue} onSearch={() => this.searchOMDB(inputValue)} input={inputValue}/>
      <PosterList movieList={movies}/>
    </section>
  );
  }
}

export default App;
