import React, { Component } from 'react';
import "./_control.scss";
import ChangeDegree from '../../components/buttons/ChangeDegree';
import ChangeLanguage from '../../components/buttons/ChangeLanguage';
import RefreshImage from '../../components/buttons/RefreshImage';

class Control extends Component {
  render() {
    return (
      <div className="control">
        <RefreshImage />
        <ChangeLanguage />
        <ChangeDegree unitsFormat={this.props.unitsFormat} uptadeUnitsFormat={this.props.uptadeUnitsFormat} />
      </div>
    )
  }
}

export default Control;
