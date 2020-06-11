/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './_search.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  handlerChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handlerPressButton(event) {
    const { uptadeWeatherData } = this.props;
    const { inputValue } = this.state;
    if (event.key === 'Enter' || event.target.tagName === 'BUTTON') {
      uptadeWeatherData(inputValue);
      this.setState({
        inputValue: '',
      });
    }
  }

  render() {
    const { language } = this.props;
    const { inputValue } = this.state;
    let placeholderTranslate = '';
    let searchTranslate = '';
    if (language === 'en') {
      placeholderTranslate = 'Search city...';
      searchTranslate = 'Search';
    } else if (language === 'ru') {
      placeholderTranslate = 'Найти город...';
      searchTranslate = 'Найти';
    } else {
      placeholderTranslate = 'Знайсці горад...';
      searchTranslate = 'Знайсці';
    }
    return (
      <div className="search">
        <input className="search__input" value={inputValue} placeholder={placeholderTranslate} onKeyPress={(event) => this.handlerPressButton(event)} onChange={this.handlerChange.bind(this)} />
        <button className="search__button" type="submit" onClick={(event) => this.handlerPressButton(event)}>{searchTranslate.toUpperCase()}</button>
      </div>
    );
  }
}

export default Search;
