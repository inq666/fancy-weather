import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './_loader.scss'

class App extends Component {
  render() {
    return (
      <div className="loader-window">
        <Loader className="loader"
          type="Oval"
          color="rgb(160, 236, 255)"
          height={400}
          width={400}
        />
      </div>
    );
  }
}

export default App;
