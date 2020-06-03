import React, { Components } from 'react';
import './_coordinates.scss';

const Coordinates = props => {
  return (
    <div className="geometry">
      <p>Latitude: {props.latitude}</p>
      <p>Longitude: {props.longitude}</p>
    </div>
  )
}

export default Coordinates;
