import React from 'react';
import PosterRow from './components/PosterRow.js';

const App = () => (
<div>
  <section className="container">
    <div className="row clearfix">
        <PosterRow />
    </div>
    <div className="row clearfix">
        <PosterRow />
    </div>
  </section>
</div>
);

export default App;
