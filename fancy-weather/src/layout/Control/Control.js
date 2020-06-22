/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import './_control.scss';
import ChangeDegree from '../../components/buttons/ChangeDegree';
import ChangeLanguage from '../../components/buttons/ChangeLanguage';
import RefreshImage from '../../components/buttons/RefreshImage';

class Control extends PureComponent {
  render() {
    const {
      language, locationUTC, uptadeUnitsFormat,
      unitsFormat, city, uptadeLanguage,
    } = this.props;
    return (
      <div className="control">
        <ChangeLanguage uptadeLanguage={uptadeLanguage} language={language} />
        <RefreshImage locationUTC={locationUTC} city={city} />
        <ChangeDegree unitsFormat={unitsFormat} uptadeUnitsFormat={uptadeUnitsFormat} />
      </div>
    );
  }
}

export default Control;
