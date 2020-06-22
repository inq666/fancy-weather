/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import data from '../../data/data';
import './_location-title.scss';

class LocationTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  getUTC() {
    const { locationData } = this.props;
    const mathSign = (locationData.locationUTC).slice(0, 1);
    const locationUTC = (locationData.locationUTC).slice(1, 3);
    const GMT = 0;
    if (mathSign === '+') {
      return GMT + locationUTC;
    }
    return GMT - locationUTC;
  }

  getLocationDate() {
    const { language } = this.props;
    const { date } = this.state;
    this.UTC = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const locationUTC = this.getUTC();
    this.UTC.setMinutes(date.getMinutes() + 60 * locationUTC);
    const dayWeek = data.days[language].short[this.UTC.getDay()];
    const month = data.months[language][this.UTC.getMonth()];
    const year = this.UTC.getFullYear();
    const day = this.UTC.getDate();
    return `${dayWeek}, ${day} ${month} ${year}`;
  }

  getLocationTime() {
    let hour = this.UTC.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let min = this.UTC.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }
    let sec = this.UTC.getSeconds();
    if (sec < 10) {
      sec = `0${sec}`;
    }
    return `${hour}:${min}:${sec}`;
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const date = this.getLocationDate();
    const time = this.getLocationTime();
    const { cityName } = this.props;
    return (
      <div>
        <h1 className="location-city">{cityName}</h1>
        <span className="location-date">{`${date} ${time}`}</span>
      </div>
    );
  }
}

export default LocationTitle;
