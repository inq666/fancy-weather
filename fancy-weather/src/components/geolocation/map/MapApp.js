import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Coordinates from './Coordinates';

class MapApp extends Component {
  render() {
    const mapStyle = {
      marginTop: 50,
      width: 500,
      height: 600
    }
    const data = this.props.data;
    return (
      <div>
        <YMaps>
          <Map style={mapStyle} state={{
            center: [data.latitude.coordinates, data.longitude.coordinates],
            zoom: 10,
          }}>
            <Placemark geometry={[data.latitude.coordinates, data.longitude.coordinates]}></Placemark>
          </Map>
          <Coordinates latitude={data.latitude.coordinatesName} longitude={data.longitude.coordinatesName} />
        </YMaps>
      </div>
    )
  }
}

export default MapApp
