import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './_mapApp.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MapApp extends Component {
  render() {
    const mapStyle = {
      marginTop: 50,
      width: 500,
      height: 600,
    }
    const data = this.props.data;
    return (

      <div className="newMap">
        <ReactCSSTransitionGroup
          transitionName="change-map"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={1000}>
          <YMaps key={this.props.language} query={{
            lang: this.props.language === 'by' ? 'ru' : this.props.language,
          }}>
            <Map className="mask" style={mapStyle} state={{
              center: [data.latitude.coordinates, data.longitude.coordinates],
              zoom: 10,
            }}>
              <Placemark geometry={[data.latitude.coordinates, data.longitude.coordinates]}></Placemark>
            </Map>
          </YMaps>
        </ReactCSSTransitionGroup>
      </div >
    )
  }
}

export default MapApp
