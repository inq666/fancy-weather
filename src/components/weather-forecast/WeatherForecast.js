/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import data from '../../data/data';
import './_weather-forecast.scss';
import ThunderstormWithRain from '../weather-icon/ThunderstormWithRain';
import Rain from '../weather-icon/Rain';
import Thunderstorm from '../weather-icon/Thunderstorm';
import Snow from '../weather-icon/Snow';
import FewClouds from '../weather-icon/FewClouds';
import ScatteredClouds from '../weather-icon/ScatteredClouds';
import ClearSky from '../weather-icon/ClearSky';
import LightRain from '../weather-icon/LightRain';
import translateWeather from '../../data/translateWeather';

class WeatherForecast extends PureComponent {
  render() {
    const {
      date, language, dataId, temperature,
    } = this.props;
    const newDate = new Date(date).getDay();
    const dayWeek = data.days[language].full[newDate];
    const id = Number(dataId);
    const weatherDescription = translateWeather.en[id];
    let icon;
    if (/rain/i.test(weatherDescription) && /thunderstorm/i.test(weatherDescription)) {
      icon = <ThunderstormWithRain />;
    } else if (/rain/i.test(weatherDescription) && /light/i.test(weatherDescription)) {
      icon = <LightRain />;
    } else if (/rain/i.test(weatherDescription)) {
      icon = <Rain />;
    } else if (/thunderstorm/i.test(weatherDescription)) {
      icon = <Thunderstorm />;
    } else if (/snow/i.test(weatherDescription)) {
      icon = <Snow />;
    } else if (/few clouds/i.test(weatherDescription)) {
      icon = <FewClouds />;
    } else if (/scattered clouds/i.test(weatherDescription)) {
      icon = <ScatteredClouds />;
    } else {
      icon = <ClearSky />;
    }
    return (
      <div className="weather-forecast">
        <div className="weather__item">
          <h1>
            {dayWeek}
          </h1>
          <div className="item__container">
            <p className="item__degree">
              {Math.round(temperature)}
              <span className="degree__elem">°</span>
            </p>
            {icon}
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherForecast;
