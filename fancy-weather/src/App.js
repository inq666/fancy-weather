import React, { Component } from 'react';
import './_App.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from './components/loader/Loader';
import Control from './layout/Control/Control';
import Main from './layout/Main/Main';
import Geolocation from './components/geolocation/Geolocation';
import InvalidRequest from './components/invalidRequest/InvalidRequest';

class App extends Component {
  constructor(props) {
    super(props);
    this.locationKey = process.env.REACT_APP_LOCATION_KEY;
    this.geolocationKey = process.env.REACT_APP_GEOLOCATION_KEY;
    this.state = {
      loading: true,
      unitsFormat: JSON.parse(localStorage.getItem('unitsFormat')) || 'metric',
      language: JSON.parse(localStorage.getItem('appLanguage')) || 'en',
      showModalWindow: false,
    };
    this.closeModalWindow = this.closeModalWindow.bind(this);
    this.uptadeLanguage = this.uptadeLanguage.bind(this);
    this.uptadeUnitsFormat = this.uptadeUnitsFormat.bind(this);
    this.uptadeWeatherData = this.uptadeWeatherData.bind(this);
  }

  async componentDidMount() {
    const { language, unitsFormat } = this.state;
    window.addEventListener('unload', () => {
      localStorage.setItem('unitsFormat', JSON.stringify(unitsFormat));
      localStorage.setItem('appLanguage', JSON.stringify(language));
    });
    const token = `https://ipinfo.io/json?token=${this.locationKey}`;
    const response = await fetch(token);
    const json = await response.json();
    const { city } = json;
    console.log(token)
    this.uptadeWeatherData(city);
    this.getCityName(city, language);
  }

  async getCityName(cityName, language) {
    const { locationData } = this.state;
    const city = locationData ? locationData.currentCity : cityName;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${this.geolocationKey}&limit=1&language=${language}`;
    const response = await fetch(url);
    const json = await response.json();
    const result = json.results[0];
    let englishCityName = '';
    if (result.components.city) {
      englishCityName = result.components.city;
    } else if (result.components.county) {
      englishCityName = result.components.county;
    } else {
      englishCityName = result.components.state;
    }
    this.setState({
      englishCityName: `${englishCityName}, ${result.components.country}`,
    });
  }

  async uptadeWeatherData(city) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${this.geolocationKey}&limit=1&language=en`;
    const response = await fetch(url);
    const json = await response.json();
    if (json.results.length < 1) {
      this.setState({
        showModalWindow: true,
      });
      return;
    }
    const result = json.results[0];
    let currentCity = '';
    if (result.components.city) {
      currentCity = result.components.city;
    } else if (result.components.county) {
      currentCity = result.components.county;
    } else {
      currentCity = result.components.state;
    }

    this.setState({
      locationData: {
        currentCountry: result.components.country,
        currentCity,
        locationUTC: result.annotations.timezone.offset_string,
      },
      latitude: {
        coordinates: result.geometry.lat,
        coordinatesName: result.annotations.DMS.lat,
      },
      longitude: {
        coordinates: result.geometry.lng,
        coordinatesName: result.annotations.DMS.lng,
      },
    });
    const { language } = this.state;
    this.getCityName(city, language);
    setTimeout(() => this.setState({
      loading: false,
    }), 3000);
  }

  uptadeUnitsFormat(format) {
    this.setState({
      unitsFormat: format,
    });
  }

  closeModalWindow() {
    this.setState({
      showModalWindow: false,
    });
  }

  uptadeLanguage(language) {
    const { locationData } = this.state;
    this.getCityName(locationData.currentCity, language);
    this.setState({
      language,
    });
  }

  render() {
    const {
      loading, unitsFormat, language, showModalWindow,
      locationData, englishCityName, latitude, longitude,
    } = this.state;
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="show-modal-window"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {showModalWindow ? <InvalidRequest closeModalWindow={this.closeModalWindow} /> : null}
        </ReactCSSTransitionGroup>
        {loading ? <Loader /> : null}
        {locationData
          ? (
            <div className="wrapper">
              <Control
                uptadeLanguage={this.uptadeLanguage}
                language={language}
                city={locationData.currentCity}
                unitsFormat={unitsFormat}
                locationUTC={locationData.locationUTC}
                uptadeUnitsFormat={this.uptadeUnitsFormat}
              />
              <div className="content">
                <Main
                  cityName={englishCityName}
                  language={language}
                  locationData={locationData}
                  unitsFormat={unitsFormat}
                />
                <Geolocation
                  language={language}
                  uptadeWeatherData={this.uptadeWeatherData}
                  data={{
                    latitude,
                    longitude,
                  }}
                />
              </div>
            </div>
          )
          : null}
      </div>
    );
  }
}

export default App;
