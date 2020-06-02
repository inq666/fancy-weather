import React, { Component } from 'react';
import Loader from '../loader/Loader';
import Coordinates from './coodinates/Coordinates';
import MapApp from './map/MapApp';
import Search from './search/Search';

class Geolocation extends Component {

  async componentWillMount() {
    if (!this.city) {
      const token = "https://ipinfo.io/json?token=eb5b90bb77d46a";
      const response = await fetch(token);
      const json = await response.json();
      this.city = json.city;
    }
    this.uptadeData(this.city)
  }

  async uptadeData(city) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=4207df84c91e45708293aaa3ba8386a0&pretty=1`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({
      latitude: {
        coordinates: json.results[0].geometry.lat,
        coordinatesName: json.results[0].annotations.DMS.lat
      },
      longitude: {
        coordinates: json.results[0].geometry.lng,
        coordinatesName: json.results[0].annotations.DMS.lng
      }
    }
    )
  }

  render() {
    let latitude = ''
    let longitude = ''
    if (this.state) {
      latitude = parseFloat(this.state.latitude.coordinates);
      longitude = parseFloat(this.state.longitude.coordinates);
    }
    return (
      <div>
        <Search uptadeData={this.uptadeData.bind(this)} />
        {this.state === null
          ?
          <Loader />
          :
          <div>
            <MapApp latitude={this.state.latitude.coordinates} longitude={this.state.longitude.coordinates} />
            <Coordinates latitude={this.state.latitude.coordinatesName} longitude={this.state.longitude.coordinatesName} />
          </div>
        }
      </div>
    )
  }
}

export default Geolocation;
