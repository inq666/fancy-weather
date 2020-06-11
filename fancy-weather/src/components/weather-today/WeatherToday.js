/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import './_weather-today.scss';
import ThunderstormWithRain from '../weather-icon/ThunderstormWithRain';
import Rain from '../weather-icon/Rain';
import Thunderstorm from '../weather-icon/Thunderstorm';
import Snow from '../weather-icon/Snow';
import FewClouds from '../weather-icon/FewClouds';
import ScatteredClouds from '../weather-icon/ScatteredClouds';
import ClearSky from '../weather-icon/ClearSky';
import LightRain from '../weather-icon/LightRain';
import translateWeather from '../../data/translateWeather';

class WeatherToday extends PureComponent {
  render() {
    const dataTranslate = {
      ru: {
        feelsLike: 'Ощущается как:',
        wind: 'Ветер:',
        humidity: 'Влажность:',
      },
      en: {
        feelsLike: 'feels Like:',
        wind: 'Wind:',
        humidity: 'Humidity:',
      },
      be: {
        feelsLike: 'Адчуваецца як:',
        wind: 'Вецер:',
        humidity: 'Вільготнасць:',
      },
    };
    const { language, weatherTodayData } = this.props;
    const translate = dataTranslate[language];
    const weatherData = weatherTodayData;
    const id = Number(weatherData.dataId);
    const weatherDescription = translateWeather[language][id];
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
      <div className="weather-today">
        <p className="degree">
          {Math.round(weatherData.temperature)}
          <span className="degree__elem">°</span>
        </p>
        <div className="weather__container">
          <div className="icon__container">
            {icon}
          </div>
          <div className="weather__info">
            <p>{weatherDescription}</p>
            <p>{`${translate.feelsLike} ${Math.round(weatherData.feelsLike)}°`}</p>
            <p>{`${translate.wind} ${Math.round(weatherData.wind)}${language === 'en' ? 'M/S' : 'M/C'}`}</p>
            <p>{`${translate.humidity} ${weatherData.humidity}%`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherToday;
