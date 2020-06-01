import React, { Component } from 'react';
import "./_location-title.scss";

class LocationTitle extends Component {
  render() {
    return (
      <div>
        <h1 className="location-city">MINSK, BELARUS</h1>
        <span className="location-date">Sun 31 May 20:10</span>
      </div>
    )
  }
}

export default LocationTitle;
