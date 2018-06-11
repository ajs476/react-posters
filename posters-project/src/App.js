import React from 'react';
import PosterList from './components/PosterList.js';
import SearchBar from './components/SearchBar.js';

const App = () => (
  <section className="container">
    <SearchBar />
    <PosterList />
  </section>
);

export default App;
