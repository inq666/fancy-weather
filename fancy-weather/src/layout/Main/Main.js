import React, { Component } from 'react';
import './_main.scss';
import WeatherForecast from '../../components/weather-forecast/WeatherForecast';
import LocationTitle from '../../components/location-title/LocationTitle';
import WeatherToday from '../../components/weather-today/WeatherToday';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <LocationTitle locationName={this.props.locationName} />
        <WeatherToday />
        <WeatherForecast />
      </div>
    )
  }
}

export default Main;
