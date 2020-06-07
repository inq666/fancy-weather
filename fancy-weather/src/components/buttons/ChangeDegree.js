import React, { Component } from 'react';
import "./_change-degree.scss";

class ChangeDegree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'metric',
    }
  }

  changeUnitsFormat(event) {
    const newFormat = event.target.id;
    if (newFormat === this.props.unitsFormat) return;
    this.props.uptadeUnitsFormat(newFormat);
  }

  render() {
    const styleDiv = ['change-degree'];
    this.props.unitsFormat === 'metric' ? styleDiv.push('active-metric') : styleDiv.push('active-imperial');
    return (
      <div className={styleDiv.join(' ')} onClick={(event) => this.changeUnitsFormat(event)}>
        <button className={this.props.unitsFormat === 'metric' ? 'active-format' : null} id="metric">°C</button>
        <button className={this.props.unitsFormat === 'imperial' ? 'active-format' : null} id="imperial">°F</button>
      </div>
    )
  }
}

export default ChangeDegree;
