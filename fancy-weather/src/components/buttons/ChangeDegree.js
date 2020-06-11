/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './_change-degree.scss';

class ChangeDegree extends Component {
  changeUnitsFormat(event) {
    const { unitsFormat, uptadeUnitsFormat } = this.props;
    const newFormat = event.target.id;
    if (newFormat === unitsFormat) return;
    uptadeUnitsFormat(newFormat);
  }

  render() {
    const { unitsFormat } = this.props;
    const styleDiv = ['change-degree'];
    if (unitsFormat === 'metric') {
      styleDiv.push('active-metric');
    } else {
      styleDiv.push('active-imperial');
    }
    return (
      <div className={styleDiv.join(' ')} onClick={(event) => this.changeUnitsFormat(event)}>
        <div className={unitsFormat === 'metric' ? 'active-format' : null} id="metric">°C</div>
        <div className={unitsFormat === 'imperial' ? 'active-format' : null} id="imperial">°F</div>
      </div>
    );
  }
}

export default ChangeDegree;
