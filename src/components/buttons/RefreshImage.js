/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './_refresh-image.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import RepeatIcon from '../repeat-icon/RepeatIcon';

class RefreshImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnimation: true,
    };
    this.imageKey = process.env.REACT_APP_GET_IMAGE_KEY;
  }

  async componentDidMount() {
    this.getDataImage();
  }

  componentDidUpdate(prevProps) {
    const { city } = this.props;
    if (city === prevProps.city) return;
    this.getDataImage();
  }

  getUTC() {
    const { locationUTC } = this.props;
    const mathSign = (locationUTC).slice(0, 1);
    const locatioTimeUTC = (locationUTC).slice(1, 3);
    const GMT = 0;
    if (mathSign === '+') {
      return GMT + locatioTimeUTC;
    }
    return GMT - locatioTimeUTC;
  }

  async getDataImage() {
    this.setState({
      showAnimation: true,
    });
    const { city } = this.props;
    const date = new Date();
    const UTC = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const locationUTC = this.getUTC();
    UTC.setMinutes(date.getMinutes() + 60 * locationUTC);
    const month = UTC.getMonth();
    const time = UTC.getHours();
    let keyword = '';
    if (time > 23 && time < 5) {
      keyword = 'night';
    } else if (month > 1 && month < 5) {
      keyword = 'spring';
    } else if (month > 4 && month < 8) {
      keyword = 'summer';
    } else if (month > 7 && month < 11) {
      keyword = 'autumn ';
    } else {
      keyword = 'winter';
    }
    let url = '';
    const request = `${city}_${keyword}`;
    try {
      url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${request}&client_id=${this.imageKey}`;
      const response = await fetch(url);
      const json = await response.json();
      this.setImage(json);
    } catch (firstError) {
      try {
        url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${city}&client_id=${this.imageKey}`;
        const response = await fetch(url);
        const json = await response.json();
        this.setImage(json);
      } catch (secondError) {
        try {
          url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${keyword}&client_id=${this.imageKey}`;
          const response = await fetch(url);
          const json = await response.json();
          this.setImage(json);
        } catch (threeError) {
          this.setImage();
        }
      }
    }
    console.log(url);
    console.log(request);
  }

  setImage(json) {
    const image = new Image();
    const defaultUrl = 'https://storge.pic2.me/upload/299/5a9ee783c3f3a.jpg';
    if (json) {
      image.src = json.urls.full;
    } else {
      image.src = defaultUrl;
    }
    image.onload = () => {
      this.setState({
        showAnimation: false,
        backgroundImage: `url(${image.src})`,
      });
    };
  }

  render() {
    const { showAnimation, backgroundImage } = this.state;
    const newImage = this.state ? backgroundImage : null;
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="change-background"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={2000}
        >
          <div className="background-weather" style={{ backgroundImage: newImage }} key={newImage} />
        </ReactCSSTransitionGroup>

        <div className="refresh-image" onClick={() => this.getDataImage()}>
          <RepeatIcon
            showAnimation={showAnimation}
          />
        </div>
      </div>
    );
  }
}

export default RefreshImage;
