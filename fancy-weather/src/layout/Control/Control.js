import React, { Component } from 'react';
import "./_control.scss";
import ChangeDegree from '../../components/buttons/ChangeDegree';
import ChangeLanguage from '../../components/buttons/ChangeLanguage';
import RefreshImage from '../../components/buttons/RefreshImage';
import Search from '../../components/search/Search';

class Control extends Component {
  render() {
    return (
      <div className="control">
        <div className="menu">
          <RefreshImage />
          <ChangeLanguage />
          <ChangeDegree />
        </div>
        <Search />
      </div>
    )
  }
}

export default Control;
