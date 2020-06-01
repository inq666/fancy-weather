import React, { Component } from 'react';
import "./_weather-today.scss";

class WeatherToday extends Component {
  render() {
    return (
      <div className="weather-today">
        <p className="degree">18<span className="degree__elem">°</span></p>
        <div className="weather-info">
          <div className="weather-container">
            <div className="weather-image"></div>
            <p>overcast</p>
            <p>feels like: 7</p>
            <p>wind: 2m/s</p>
            <p>humidity: 83%</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherToday;
