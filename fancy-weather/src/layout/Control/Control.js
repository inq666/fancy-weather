import React, { Component } from 'react';
import "./_control.scss";
import ChangeDegree from '../../components/buttons/ChangeDegree';
import ChangeLanguage from '../../components/buttons/ChangeLanguage';
import RefreshImage from '../../components/buttons/RefreshImage';
import Search from '../../components/geolocation/search/Search';

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
