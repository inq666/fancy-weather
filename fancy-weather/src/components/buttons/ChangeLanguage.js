import React, { Component } from 'react';
import "./_change-language.scss"

class ChangeLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language,
      languageButtons: ['en', 'ru', 'be'],
    }
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
    })
    this.props.uptadeLanguage(selectedLanguage);
  }

  render() {
    const styleDiv = `change-language active-${this.state.language}`;
    const buttons = this.state.languageButtons.map((language) => (
      <div className={this.state.language === language ? 'active-language' : ''} key={language} id={language}>
        {language.toUpperCase()}
      </div>
    ));
    return (
      <div className={styleDiv} onClick={(event) => this.handlerChangeLanguage(event)}>
        {buttons}
      </div>
    )
  }
}

export default ChangeLanguage;
