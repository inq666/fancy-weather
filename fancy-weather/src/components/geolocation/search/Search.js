import React, { Component } from 'react';
import "./_search.scss";
import { Context } from '../../../App';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
  }

  handlerChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  handlerPressButton(event) {
    if (event.key === 'Enter' || event.target.tagName === 'BUTTON') {
      this.props.uptadeData(this.state.inputValue)
      this.setState({
        inputValue: '',
      })
    }
  }

  render() {
    return (
      <div className="search">
        <input className="search__input" value={this.state.inputValue} placeholder="Search city" onKeyPress={(event) => this.handlerPressButton(event)} onChange={this.handlerChange.bind(this)}></input>
        <button className="search__button" onClick={(event) => this.handlerPressButton(event)}>search</button>
      </div>
    )
  }
}

export default Search;
