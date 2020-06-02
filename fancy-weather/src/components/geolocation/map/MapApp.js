import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

class MapApp extends Component {
  render() {
    const mapStyle = {
      marginTop: 50,
      width: 500,
      height: 600
    }
    return (
      <YMaps>
        <Map style={mapStyle} state={{
          center: [this.props.latitude, this.props.longitude],
          zoom: 10,
        }}>
          <Placemark geometry={[this.props.latitude, this.props.longitude]}></Placemark>
        </Map>
      </YMaps>
    )
  }
}

export default MapApp
