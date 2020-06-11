import React, { PureComponent } from 'react';
import Loader from 'react-loader-spinner';
import './_loader.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="loader-window">
        <Loader
          className="loader"
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
