import React, { Component } from 'react';
import MapApp from './map/MapApp';
import Search from './search/Search';

class Geolocation extends Component {

  render() {
    return (
      <div>
        <Search uptadeData={this.props.uptadeData} />
        <MapApp data={this.props.data} />
        }
      </div>
    )
  }
}

export default Geolocation;
