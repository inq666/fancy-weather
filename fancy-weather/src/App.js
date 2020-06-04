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
    const result = json.results[0];
    console.log(json)
    const currentCity = result.components.city ? result.components.city :
      result.components.county ? result.components.county :
        result.components.state
    this.setState({
      locationData: {
        currentCountry: result.components.country,
        currentCity: currentCity,
        locationUTC: result.annotations.timezone.offset_string,
      },
      latitude: {
        coordinates: result.geometry.lat,
        coordinatesName: result.annotations.DMS.lat
      },
      longitude: {
        coordinates: result.geometry.lng,
        coordinatesName: result.annotations.DMS.lng
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
            <Main locationData={this.state.locationData} />
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
