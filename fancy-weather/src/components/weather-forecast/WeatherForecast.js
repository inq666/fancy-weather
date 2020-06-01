import React, { Component } from 'react';
import "./_weather-forecast.scss";

class WeatherForecast extends Component {
  render() {
    return (
      <div className="weather-forecast">
        <div className="weather__item">
          <h1>
            Tuesday
          </h1>
          <div className="item__container">
            <p className="item__degree">18<span className="degree__elem">°</span></p>
            <div className="item__image"></div>
          </div>
        </div>
        <div className="weather__item">
          <h1>
            Tuesday
          </h1>
          <div className="item__container">
            <p className="item__degree">18<span className="degree__elem">°</span></p>
            <div className="item__image"></div>
          </div>
        </div>
        <div className="weather__item">
          <h1>
            Tuesday
          </h1>
          <div className="item__container">
            <p className="item__degree">18<span className="degree__elem">°</span></p>
            <div className="item__image"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherForecast;
