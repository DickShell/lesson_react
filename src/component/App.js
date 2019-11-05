import React, { Component } from 'react';

import Game from './Game/index';
import './app.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Game />
      </div>
    );
  }

}

export default App;