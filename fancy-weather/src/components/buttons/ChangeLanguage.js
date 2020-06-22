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
    const selectedLanguage = event.target.id;
    this.setState({
      language: selectedLanguage,
    });
    const { uptadeLanguage } = this.props;
    uptadeLanguage(selectedLanguage);
  }

  render() {
    const { language, languageButtons } = this.state;
    const styleDiv = `change-language active-${language}`;
    const buttons = languageButtons.map((buttonName) => (
      <div className={language === buttonName ? 'active-language' : ''} key={buttonName} id={buttonName}>
        {buttonName.toUpperCase()}
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
