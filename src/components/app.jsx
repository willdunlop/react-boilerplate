import React, { Component } from 'react';

import Scene from './scene';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
        <Scene />
          <div className="app__container">
            <h1 className="app__main-heading">Mystery Cube</h1>
            <h2 className="app__secondary-heading">That spins...</h2>
            <p className="app__body-text">...in darkness</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
