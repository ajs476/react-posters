import React from 'react';
import Poster from './components/Poster.js';

const App = () => (
<div>
  <section className="container">
    <div className="row clearfix">
      <div className="column fifth">
        <Poster />
      </div>
      <div className="column fifth">
        <Poster />
      </div>
      <div className="column fifth">
        <Poster />
      </div>
      <div className="column fifth">
        <Poster />
      </div>
      <div className="column fifth">
        <Poster />
      </div>
    </div>
  </section>
  <section className="container">
    <div className="row clearfix">
      <div className="column fifth">
        <Poster />
      </div>
      <div className="column fifth">
        <Poster />
      </div>
      <div className="column fifth">
        <Poster />
      </div>
      <div className="column fifth">
        <Poster />
      </div>
      <div className="column fifth">
        <Poster />
      </div>
    </div>
  </section>
</div>
);

export default App;
