import React, { Component } from 'react';
import './_App.scss';
import Control from './layout/Control/Control'

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <Control />
      </div>
    )
  }
}

export default App;
