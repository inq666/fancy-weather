import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './_loader.scss'

class App extends Component {
  render() {
    return (
      <Loader className="loader"
        type="Oval"
        color="#ffffff"
        height={350}
        width={350}
      />
    );
  }
}

export default App;
