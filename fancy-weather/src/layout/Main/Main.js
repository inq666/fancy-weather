/* eslint-disable no-continue */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './_main.scss';
import WeatherForecast from '../../components/weather-forecast/WeatherForecast';
import LocationTitle from '../../components/location-title/LocationTitle';
import WeatherToday from '../../components/weather-today/WeatherToday';
import translateWeather from '../../data/translateWeather';

class Main extends Component {
  componentDidMount() {
    this.updateWeatherData();
  }

  componentDidUpdate(prevProps) {
    const { locationData, unitsFormat } = this.props;
    if (locationData.currentCity === prevProps.locationData.currentCity
      && unitsFormat === prevProps.unitsFormat) return;
    this.updateWeatherData();
  }

  getWeatherForecast(json) {
    const maxDay = Number((json.list[json.list.length - 1].dt_txt).slice(8, 10));
    let prevDay = Number((json.list[0].dt_txt).slice(8, 10));
    let nextDay = prevDay + 1;
    const weatherForecastArray = [[], [], []];
    const dayForecast = 3;
    let indexForecast = 0;
    for (let i = 0; i < json.list.length; i += 1) {
      const day = Number((json.list[i].dt_txt).slice(8, 10));
      if (indexForecast >= dayForecast) break;
      if (day === prevDay) continue;
      if (day === nextDay) weatherForecastArray[indexForecast].push(json.list[i]);
      if (day !== prevDay && day !== nextDay) {
        prevDay += 1;
        nextDay += 1;
        indexForecast += 1;
      }
      if (nextDay > maxDay) {
        prevDay = 1;
        nextDay = prevDay + 1;
      }
    }
    return this.getAverageTemp(weatherForecastArray);
  }

  getAverageTemp(array) {
    this.avarageTempArray = [];
    for (let i = 0; i < array.length; i += 1) {
      const averageTime = Math.floor(array[i].length / 2) + 1;
      this.avarageTempArray.push(array[i][averageTime]);
    }
    return this.avarageTempArray;
  }

  async updateWeatherData() {
    const { unitsFormat, locationData, language } = this.props;
    const city = locationData.currentCity;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3ed9d182aca05f9c062f6571836da453&units=${unitsFormat}&lang=${language}`;
    const response = await fetch(url);
    const json = await response.json();
    const weatherForecastArray = this.getWeatherForecast(json);
    const result = json.list[0];
    this.setState({
      weatherForecast: weatherForecastArray,
      weatherToday: {
        dataId: result.weather[0].id,
        temperature: result.main.temp,
        description: translateWeather[language][result.weather[0].id],
        feelsLike: result.main.feels_like,
        wind: result.wind.speed,
        humidity: result.main.humidity,
      },
    });
  }

  render() {
    if (!this.state) return null;
    const { cityName, language, locationData } = this.props;
    const { weatherToday, weatherForecast } = this.state;
    return (
      <div className="main">
        <LocationTitle cityName={cityName} language={language} locationData={locationData} />
        <WeatherToday language={language} weatherTodayData={weatherToday} />
        <div className="weather__container">
          {weatherForecast.map((day) => (
            <WeatherForecast
              language={language}
              date={day.dt_txt}
              key={day.dt_txt}
              temperature={day.main.temp}
              dataId={day.weather[0].id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
