import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "./_map.scss";

class Map1 extends Component {

  constructor() {
    super();
    this.state = {
      latitude: {
        coordinates: 53,
        coordinatesName: `53° 54' 10.91232'' N`,
      },
      longitude: {
        coordinates: 27,
        coordinatesName: `27° 33' 44.08632'' E`,
      }
    }
  }

  async componentDidMount() {
    await this.getLocation();
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${this.city}&key=4207df84c91e45708293aaa3ba8386a0&pretty=1`;
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

  async getLocation() {
    const token = "https://ipinfo.io/json?token=eb5b90bb77d46a";
    const response = await fetch(token);
    const json = await response.json();
    this.city = json.city
  }

  render() {
    const mapStyle = {
      marginTop: 50,
      width: 500,
      height: 600
    }
    const latitude = parseFloat(this.state.latitude.coordinates);
    const longitude = parseFloat(this.state.longitude.coordinates);

    return (
      <div>
        <YMaps>
          <Map style={mapStyle} defaultState={{
            center: [latitude, longitude],
            zoom: 10,
          }}>
            <Placemark geometry={[latitude, longitude]}></Placemark>
          </Map>
        </YMaps>
        <div className="geometry">
          <p>Latitude: {this.state.latitude.coordinatesName}</p>
          <p>Longitude: {this.state.longitude.coordinatesName}</p>
        </div>
      </div>
    )
  }
}

export default Map1;
