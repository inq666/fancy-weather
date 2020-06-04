import React, { Component } from 'react';
import "./_weather-today.scss";

class WeatherToday extends Component {
  render() {
    const weatherData = this.props.weatherTodayData;
    return (
      <div className="weather-today">
        <p className="degree">{Math.round(weatherData.temperature)}<span className="degree__elem">°</span></p>
        <div className="weather-info">
          <div className="weather-container">
            <div className="weather-image"></div>
            <p>{weatherData.description}</p>
            <p>feels like: {Math.round(weatherData.feelsLike)}</p>
            <p>wind: {Math.round(weatherData.wind)}m/s</p>
            <p>humidity: {weatherData.humidity}%</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherToday;
