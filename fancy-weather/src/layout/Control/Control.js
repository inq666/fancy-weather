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
          <ChangeDegree />
        </div>
    )
  }
}

export default Control;
