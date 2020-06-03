import React, { Component } from 'react';
import './_App.scss';
import Loader from './components/loader/Loader';
import Control from './layout/Control/Control';
import Main from './layout/Main/Main';
import Geolocation from './components/geolocation/Geolocation';

const Context = React.createContext();
class App extends Component {

  async componentWillMount() {
    const token = "https://ipinfo.io/json?token=eb5b90bb77d46a";
    const response = await fetch(token);
    const json = await response.json();
    const city = json.city;
    this.uptadeData(city)
  }

  async uptadeData(city) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=4207df84c91e45708293aaa3ba8386a0&limit=1&language=en`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    const currentCity = json.results[0].components.city ? json.results[0].components.city :
      json.results[0].components.county ? json.results[0].components.county :
        json.results[0].components.state
    this.setState({
      locationName: {
        currentCounty: json.results[0].components.country,
        currentCity: currentCity,
      },
      latitude: {
        coordinates: json.results[0].geometry.lat,
        coordinatesName: json.results[0].annotations.DMS.lat
      },
      longitude: {
        coordinates: json.results[0].geometry.lng,
        coordinatesName: json.results[0].annotations.DMS.lng
      }
    }
    )
  }

  render() {
    return (
      <div className="wrapper">
        <Control />
        {this.state !== null
          ?
          <div className="content">
            <Main locationName={this.state.locationName} />
            <Geolocation uptadeData={this.uptadeData.bind(this)} data={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }} />
          </div>
          :
          <Loader />
        }
      </div >
    )
  }
}

export { App, Context }
