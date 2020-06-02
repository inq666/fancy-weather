import React, { Component } from 'react';
import './_App.scss';
import Control from './layout/Control/Control';
import Main from './layout/Main/Main';
import Geolocation from './components/geolocation/Geolocation';

const Context = React.createContext()
class App extends Component {

  uptadeData(newCity) {
    this.setState({
      currentCity: newCity,
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Context.Provider value={this.uptadeData.bind(this)}>
          <Control />
        </Context.Provider>
        <div className="content">
          <Main />
          <Geolocation city={this.state ? this.state.currentCity : null} />
        </div>
      </div>
    )
  }
}

export { App, Context }
