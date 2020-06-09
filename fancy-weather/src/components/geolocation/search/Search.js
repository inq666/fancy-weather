import React, { Component } from 'react';
import "./_search.scss";

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
      this.props.uptadeWeatherData(this.state.inputValue)
      this.setState({
        inputValue: '',
      })
    }
  }

  render() {
    const language = this.props.language
    let placeholderTranslate = '';
    let searchTranslate = '';
    if (language === 'en') {
      placeholderTranslate = 'Search city...';
      searchTranslate = 'Search'
    } else if (language === 'ru') {
      placeholderTranslate = 'Найти город...';
      searchTranslate = 'Найти'
    } else {
      placeholderTranslate = 'Знайсці горад...';
      searchTranslate = 'Знайсці'
    }
    if (this)
      return (
        <div className="search">
          <input className="search__input" value={this.state.inputValue} placeholder={placeholderTranslate} onKeyPress={(event) => this.handlerPressButton(event)} onChange={this.handlerChange.bind(this)}></input>
          <button className="search__button" onClick={(event) => this.handlerPressButton(event)}>{searchTranslate.toUpperCase()}</button>
        </div>
      )
  }
}

export default Search;
