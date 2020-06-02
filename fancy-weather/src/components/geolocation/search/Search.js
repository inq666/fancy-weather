import React, { Component } from 'react';
import "./_search.scss";

class Search extends Component {

  handlerChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    return (
      <div className="search">
        <input className="search__input" type="text" placeholder="Search city" onChange={this.handlerChange.bind(this)}></input>
        <button className="search__button" onClick={() => this.props.uptadeData(this.state.inputValue)}>search</button>
      </div>
    )
  }
}

export default Search;
