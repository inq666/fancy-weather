import React from 'react';
import './_coordinates.scss';

const Coordinates = props => {
  const language = props.language
  let latitudeTranslate = '';
  let longitudeTranslate = '';
  if (language === 'en') {
    latitudeTranslate = 'Latitude';
    longitudeTranslate = 'Longitude'
  } else if (language === 'ru') {
    latitudeTranslate = 'Широта';
    longitudeTranslate = 'Долгота'
  } else {
    latitudeTranslate = 'Шырата';
    longitudeTranslate = 'Даўгата'
  }
  console.log(props.language)
  return (
    <div className="geometry">
      <p>{`${latitudeTranslate}: ${props.latitude}`}</p>
      <p>{`${longitudeTranslate}: ${props.longitude}`}</p>
    </div>
  )
}

export default Coordinates;
