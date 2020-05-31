import React, {Component} from 'react';
import "./_search.scss";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input className="search__input" placeholder="Search city"></input>
        <button className="search__button">search</button>
      </div>
    )
  }
}

export default Search;
