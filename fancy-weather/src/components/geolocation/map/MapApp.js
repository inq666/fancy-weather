import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './_mapApp.scss';

class MapApp extends Component {
  render() {
    const mapStyle = {
      marginTop: 50,
      width: 500,
      height: 600,
    }
    const data = this.props.data;
    return (
        <YMaps key={this.props.language} query={{
          lang: this.props.language === 'be' ? 'ru' : this.props.language,
        }}>
          <Map className="mask" style={mapStyle} state={{
            center: [data.latitude.coordinates, data.longitude.coordinates],
            zoom: 10,
          }}>
            <Placemark geometry={[data.latitude.coordinates, data.longitude.coordinates]}></Placemark>
          </Map>
        </YMaps>
    )
  }
}

export default MapApp
