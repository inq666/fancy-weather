import React, { Component } from 'react';
import { data } from '../../data/data';
import './_weather-forecast.scss';
import { ThunderstormWithRain } from '../weather-icon/ThunderstormWithRain';
import { Rain } from '../weather-icon/Rain';
import { Thunderstorm } from '../weather-icon/Thunderstorm';
import { Snow } from '../weather-icon/Snow';
import { FewClouds } from '../weather-icon/FewClouds';
import { ScatteredClouds } from '../weather-icon/ScatteredClouds';
import { ClearSky } from '../weather-icon/ClearSky';
import { LightRain } from '../weather-icon/LightRain';

class WeatherForecast extends Component {
  render() {
    const weatherDescription = this.props.weatherDescription
    const date = new Date(this.props.date).getDay();
    const dayWeek = data.days[date]

    return (
      <div className="weather-forecast">
        <div className="weather__item">
          <h1>
            {dayWeek}
          </h1>
          <div className="item__container">
            <p className="item__degree">{Math.round(this.props.temperature)}<span className="degree__elem">°</span></p>
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
        </div>
      </div>
    )
  }
}

export default WeatherForecast;
