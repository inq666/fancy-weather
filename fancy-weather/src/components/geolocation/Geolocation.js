import React, { Component } from 'react';
import MapApp from './map/MapApp';
import Search from './search/Search';
import './_geolocation.scss';
import Coordinates from './map/Coordinates';

class Geolocation extends Component {

  render() {
    return (
      <div className="geolocation">
        <Search language={this.props.language} uptadeWeatherData={this.props.uptadeWeatherData} />
        <MapApp language={this.props.language} data={this.props.data} />
        <Coordinates language={this.props.language} latitude={this.props.data.latitude.coordinatesName} longitude={this.props.data.longitude.coordinatesName} />
      </div>
    )
  }
}

export default Geolocation;
