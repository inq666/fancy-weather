import React, { Component } from 'react';
import './_App.scss';
import Control from './layout/Control/Control';
import Main from './layout/Main/Main';
import Map from './components/map/Map';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Control />
        <div className="content">
          <Main />
          <Map />
        </div>
      </div>
    )
  }
}

export default App;
