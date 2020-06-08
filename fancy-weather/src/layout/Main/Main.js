import React, { Component } from 'react';
import './_main.scss';
import WeatherForecast from '../../components/weather-forecast/WeatherForecast';
import LocationTitle from '../../components/location-title/LocationTitle';
import WeatherToday from '../../components/weather-today/WeatherToday';

class Main extends Component {
  componentDidMount() {
    this.updateWeatherData();
  }

  async updateWeatherData() {
    const unitsFormat = this.props.unitsFormat;
    const city = this.props.locationData.currentCity;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3ed9d182aca05f9c062f6571836da453&units=${unitsFormat}`
    const response = await fetch(url);
    const json = await response.json();
    const weatherForecastArray = this.getWeatherForecast(json)
    this.setState({
      weatherForecast: weatherForecastArray,
      weatherToday: {
        temperature: json.list[0].main.temp,
        description: json.list[0].weather[0].description,
        feelsLike: json.list[0].main.feels_like,
        wind: json.list[0].wind.speed,
        humidity: json.list[0].main.humidity,
      }
    })
  }

  getWeatherForecast(json) {
    const maxDay = Number((json.list[json.list.length - 1].dt_txt).slice(8, 10))
    let prevDay = Number((json.list[0].dt_txt).slice(8, 10))
    let nextDay = prevDay + 1;
    const weatherForecastArray = [[], [], []]
    const dayForecast = 3;
    let indexForecast = 0;
    for (let i = 0; i < json.list.length; i += 1) {
      const day = Number((json.list[i].dt_txt).slice(8, 10))
      if (indexForecast >= dayForecast) break;
      if (day === prevDay) continue;
      if (day === nextDay) weatherForecastArray[indexForecast].push(json.list[i])
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
    return this.getAverageTemp(weatherForecastArray)
  }

  getAverageTemp(array) {
    const avarageTempArray = [];
    for (let i = 0; i < array.length; i += 1) {
      const averageTime = Math.floor(array[i].length / 2) + 1
      avarageTempArray.push(array[i][averageTime])
    }
    return avarageTempArray;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.locationData.currentCity === prevProps.locationData.currentCity &&
      this.props.unitsFormat === prevProps.unitsFormat) return
    this.updateWeatherData();
  }

  render() {
    if (!this.state) return null
    return (
      <div className="main">
        <LocationTitle locationData={this.props.locationData} />
        <WeatherToday weatherTodayData={this.state.weatherToday} />
        <div className="weather__container">
          {this.state.weatherForecast.map((day, index) => {
            return (
              <WeatherForecast
                date={day.dt_txt}
                key={index}
                temperature={day.main.temp}
                weatherDescription={day.weather[0].description}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Main;
