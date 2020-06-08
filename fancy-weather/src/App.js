import React, { Component } from 'react';
import './_App.scss';
import Loader from './components/loader/Loader';
import Control from './layout/Control/Control';
import Main from './layout/Main/Main';
import Geolocation from './components/geolocation/Geolocation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      unitsFormat: 'metric',
    }
  }

  async componentDidMount() {
    const token = "https://ipinfo.io/json?token=eb5b90bb77d46a";
    const response = await fetch(token);
    const json = await response.json();
    const city = json.city;
    this.uptadeWeatherData(city)
  }

  async uptadeWeatherData(city) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=4207df84c91e45708293aaa3ba8386a0&limit=1&language=en`;
    const response = await fetch(url);
    const json = await response.json();
    const result = json.results[0];
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
    setTimeout(() => this.setState({
      loading: false,
    }), 3000)
  }

  uptadeUnitsFormat(format) {
    this.setState({
      unitsFormat: format,
    })
  }

  render() {
    return (
      <div>
       {/*  {this.state.loading ? <Loader /> : null} */}
        {this.state.locationData
          ?
          <div className="wrapper">
            <Control
              city={this.state.locationData.currentCity}
              unitsFormat={this.state.unitsFormat}
              uptadeUnitsFormat={this.uptadeUnitsFormat.bind(this)} />
            <div className="content">
              <Main locationData={this.state.locationData} unitsFormat={this.state.unitsFormat} />
              <Geolocation uptadeWeatherData={this.uptadeWeatherData.bind(this)} data={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }} />
            </div>
          </div>
          :
          null
        }
      </div>
    )
  }
}

export default App;
