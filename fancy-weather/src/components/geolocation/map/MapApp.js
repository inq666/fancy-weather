/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './_mapApp.scss';

class MapApp extends PureComponent {
  render() {
    const mapStyle = {
      marginTop: 50,
      width: 500,
      height: 600,
    };
    const { data, language } = this.props;
    return (
      <YMaps key={language} query={{ lang: language === 'be' ? 'ru' : language }}>
        <Map
          className="mask"
          style={mapStyle}
          state={{
            center: [data.latitude.coordinates, data.longitude.coordinates],
            zoom: 10,
          }}
        >
          <Placemark geometry={[data.latitude.coordinates, data.longitude.coordinates]} />
        </Map>
      </YMaps>
    );
  }
}

export default MapApp;
