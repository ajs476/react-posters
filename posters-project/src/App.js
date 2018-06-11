import React from 'react';
import PosterList from './components/PosterList.js';
import SearchBar from './components/SearchBar.js';
import Poster from './components/Poster.js';
import posterData from './data/poster-data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: posterData,
    };
    this.updateMovies = this.updateMovies.bind(this);
  }

  updateMovies(results) {
    this.setState({movies: [results, ...posterData]});
  }

  render() {
    return (
    <section className="container">
      <SearchBar updateMovies={this.updateMovies}/>
      <PosterList movieList={this.state.movies}/>
    </section>
  );
  }
}

export default App;
