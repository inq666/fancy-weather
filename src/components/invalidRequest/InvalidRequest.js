/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './_invalidRequest.scss';

class InvalidRequest extends Component {
  handlerClickConfrim() {
    const { closeModalWindow } = this.props;
    closeModalWindow();
  }

  render() {
    return (
      <div className="modal-window">
        <div className="modal-window__confrim">
          <div className="confrim__error-icon" />
          <p className="confrim__info">Invalid Request. Try again</p>
          <button className="confrim__button" type="submit" onClick={() => this.handlerClickConfrim()}>OK</button>
        </div>
      </div>
    );
  }
}

export default InvalidRequest;
