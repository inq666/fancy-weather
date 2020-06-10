import React, { Component } from 'react';
import "./_weather-today.scss";
import { ThunderstormWithRain } from '../weather-icon/ThunderstormWithRain';
import { Rain } from '../weather-icon/Rain';
import { Thunderstorm } from '../weather-icon/Thunderstorm';
import { Snow } from '../weather-icon/Snow';
import { FewClouds } from '../weather-icon/FewClouds';
import { ScatteredClouds } from '../weather-icon/ScatteredClouds';
import { ClearSky } from '../weather-icon/ClearSky';
import { LightRain } from '../weather-icon/LightRain';
import { translateWeather } from '../../data/translateWeather';

class WeatherToday extends Component {
  render() {
    const dataTranslate = {
      'ru': {
        feelsLike: 'Ощущается как:',
        wind: 'Ветер:',
        humidity: 'Влажность:',
      },
      'en': {
        feelsLike: 'feels Like:',
        wind: 'Wind:',
        humidity: 'Humidity:',
      },
      'be': {
        feelsLike: 'Адчуваецца як:',
        wind: 'Вецер:',
        humidity: 'Вільготнасць:',
      }
    }
    const translate = dataTranslate[this.props.language];
    const styleDiv = {
      transform: "scale(1.8)",
      display: "inline-block",
      height: "100px",
      width: "200px",
      textAlign: "center"
    }

    const weatherData = this.props.weatherTodayData;
    const id = Number(weatherData.dataId)
    const weatherDescription = translateWeather[this.props.language][id]
    return (
      <div className="weather-today">
        <p className="degree">{Math.round(weatherData.temperature)}<span className="degree__elem">°</span></p>
        <div className="weather__container">
          <div style={styleDiv}>
            {
              (/rain/i.test(weatherDescription) && /thunderstorm/i.test(weatherDescription)) ? <ThunderstormWithRain /> :
                /rain/i.test(weatherDescription) && /light/i.test(weatherDescription) ? <LightRain /> :
                  /rain/i.test(weatherDescription) ? <Rain /> :
                    /thunderstorm/i.test(weatherDescription) ? <Thunderstorm /> :
                      /snow/i.test(weatherDescription) ? <Snow /> :
                        /few clouds/i.test(weatherDescription) ? <FewClouds /> :
                          /scattered clouds/i.test(weatherDescription) ? <ScatteredClouds /> : <ClearSky />
            }
          </div>
          <div className="weather__info">
            <p>{weatherDescription}</p>
            <p>{`${translate.feelsLike} ${Math.round(weatherData.feelsLike)}°`}</p>
            <p>{`${translate.wind} ${Math.round(weatherData.wind)}M/S`}</p>
            <p>{`${translate.humidity} ${weatherData.humidity}%`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherToday;
