import React, { Component } from 'react';
import "./_location-title.scss";

class LocationTitle extends Component {
  render() {
    console.log(this.props.locationName)
    const city = this.props.locationName.currentCity;
    const country = this.props.locationName.currentCounty;
    return (
      <div>
        <h1 className="location-city">{`${city}, ${country}`}</h1>
        <span className="location-date">Sun 31 May 20:10</span>
      </div>
    )
  }
}

export default LocationTitle;
