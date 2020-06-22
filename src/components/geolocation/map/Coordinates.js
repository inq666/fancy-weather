/* eslint-disable react/prop-types */
import React from 'react';
import './_coordinates.scss';

const Coordinates = (props) => {
  const { language, latitude, longitude } = props;
  let latitudeTranslate = '';
  let longitudeTranslate = '';
  if (language === 'en') {
    latitudeTranslate = 'Latitude';
    longitudeTranslate = 'Longitude';
  } else if (language === 'ru') {
    latitudeTranslate = 'Широта';
    longitudeTranslate = 'Долгота';
  } else {
    latitudeTranslate = 'Шырата';
    longitudeTranslate = 'Даўгата';
  }
  return (
    <div className="geometry">
      <p>{`${latitudeTranslate}: ${latitude}`}</p>
      <p>{`${longitudeTranslate}: ${longitude}`}</p>
    </div>
  );
};

export default Coordinates;
