/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './_change-language.scss';

class ChangeLanguage extends Component {
  constructor(props) {
    super(props);
    const { language } = this.props;
    this.state = {
      language,
      languageButtons: ['en', 'ru', 'be'],
    };
  }

  handlerChangeLanguage(event) {
    let selectedLanguage = '';
    const target = event.target.id;
    if (target === 'en') {
      selectedLanguage = 'en';
    } else if (target === 'ru') {
      selectedLanguage = 'ru';
    } else {
      selectedLanguage = 'be';
    }
    this.setState({
      language: selectedLanguage,
    });
    const { uptadeLanguage } = this.props;
    uptadeLanguage(selectedLanguage);
  }

  render() {
    const { language, languageButtons } = this.state;
    const styleDiv = `change-language active-${language}`;
    const buttons = languageButtons.map((languageButton) => (
      <div className={language === languageButton ? 'active-language' : ''} key={language} id={language}>
        {language.toUpperCase()}
      </div>
    ));
    return (
      <div className={styleDiv} onClick={(event) => this.handlerChangeLanguage(event)}>
        {buttons}
      </div>
    );
  }
}

export default ChangeLanguage;
