import React, { Component } from 'react';
import "./_refresh-image.scss";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class RefreshImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnimation: true,
    }
  }

  getUTC() {
    const mathSign = (this.props.locationUTC).slice(0, 1);
    const locationUTC = (this.props.locationUTC).slice(1, 3);
    const GMT = 0;
    if (mathSign === '+') {
      return GMT + locationUTC;
    }
    return GMT - locationUTC;
  }

  async componentDidMount() {
    this.getDataImage()
  }

  async getDataImage() {
    this.setState({
      showAnimation: true,
    })
    const date = new Date()
    const UTC = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const locationUTC = this.getUTC();
    UTC.setMinutes(date.getMinutes() + 60 * locationUTC)
    const month = UTC.getMonth();
    const time = UTC.getHours();

    let keyword = '';
    if (time > 23 && time < 5) {
      keyword = 'night';
    }
    else if (month > 1 && month < 5) {
      keyword = 'spring';
    } else if (month > 4 && month < 8) {
      keyword = 'summer';
    } else if (month > 7 && month < 11) {
      keyword = 'autumn ';
    } else {
      keyword = 'winter';
    }
    let url = '';
    const request = `${this.props.city}_${keyword}`;
    try {
      url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${request}&client_id=itYr7KREbu7JyO7fDItL2-vArBJiFu2RbuqWTN0Wmn8`;
      const response = await fetch(url);
      const json = await response.json();
      this.setImage(json)
    } catch (error) {
      try {
        url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${this.props.city}&client_id=itYr7KREbu7JyO7fDItL2-vArBJiFu2RbuqWTN0Wmn8`;
        const response = await fetch(url);
        const json = await response.json();
        this.setImage(json)
      } catch (error) {
        try {
          url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${keyword}&client_id=itYr7KREbu7JyO7fDItL2-vArBJiFu2RbuqWTN0Wmn8`;
          const response = await fetch(url);
          const json = await response.json();
          this.setImage(json)
        } catch (error) {
          this.setImage()
        }
      }
    }
    console.log(url)
    console.log(request)
  }

  setImage(json) {
    const image = new Image();
    const defaultUrl = 'https://storge.pic2.me/upload/299/5a9ee783c3f3a.jpg'
    if (json) {
      image.src = json.urls.full;
    } else {
      image.src = defaultUrl;
    }
    image.onload = () => {
      this.setState({
        showAnimation: false,
        backgroundImage: `url(${image.src})`,
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.city === prevProps.city) return;
    this.getDataImage();
  }

  render() {
    const style = ['refresh__icon'];
    style.push(this.state.showAnimation ? 'show-animation' : '');
    const newImage = this.state ? this.state.backgroundImage : null;
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="change-background"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={2000}>
          <div className="background-weather" style={{ backgroundImage: newImage }} key={newImage}></div >
        </ReactCSSTransitionGroup>

        <div className="refresh-image" onClick={() => this.getDataImage()}>
          <svg className={style.join(' ')} width="54px" height="54px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
              <path d="M2415 4153 c-516 -62 -967 -352 -1233 -796 -34 -56 -66 -114 -71 -129 l-11 -28 290 0 c160 0 290 4 290 8 0 19 147 166 222 222 195 147 413 220 658 220 223 0 416 -57 600 -179 69 -45 199 -168 256 -242 41 -53 114 -171 114 -183 0 -3 -66 -6 -147 -6 -206 -1 -253 -23 -253 -119 0 -35 13 -60 90 -173 217 -320 417 -594 449 -615 64 -43 144 -40 206 9 27 21 480 618 536 706 52 82 31 159 -49 182 -20 5 -93 10 -162 10 l-125 0 -24 65 c-122 341 -393 661 -716 848 -164 95 -375 166 -572 192 -98 13 -273 17 -348 8z" />
              <path d="M1285 3001 c-22 -10 -52 -31 -66 -47 -36 -40 -474 -625 -510 -682 -52 -82 -31 -159 49 -182 20 -5 93 -10 162 -10 l125 0 24 -67 c145 -406 500 -774 906 -938 339 -137 724 -150 1066 -35 332 111 650 352 846 640 39 57 133 222 133 232 0 4 -130 8 -290 8 -159 0 -290 -4 -290 -8 0 -19 -147 -166 -222 -222 -195 -147 -413 -220 -658 -220 -223 0 -416 57 -600 179 -69 45 -200 169 -254 241 -42 55 -116 172 -116 184 0 3 66 6 148 6 123 0 154 4 189 19 78 36 86 103 22 201 -58 91 -438 631 -463 659 -27 30 -92 61 -131 61 -16 0 -48 -9 -70 -19z" />
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default RefreshImage;
