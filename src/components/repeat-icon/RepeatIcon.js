/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { PureComponent } from 'react';
import './_repeat-icon.scss';

class RepeatIcon extends PureComponent {
  render() {
    const { showAnimation } = this.props;
    const style = ['refresh__icon'];
    style.push(showAnimation ? 'show-animation' : '');
    return (
      <svg className={style.join(' ')} width="54px" height="54px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M2415 4153 c-516 -62 -967 -352 -1233 -796 -34 -56 -66 -114 -71 -129 l-11 -28 290 0 c160 0 290 4 290 8 0 19 147 166 222 222 195 147 413 220 658 220 223 0 416 -57 600 -179 69 -45 199 -168 256 -242 41 -53 114 -171 114 -183 0 -3 -66 -6 -147 -6 -206 -1 -253 -23 -253 -119 0 -35 13 -60 90 -173 217 -320 417 -594 449 -615 64 -43 144 -40 206 9 27 21 480 618 536 706 52 82 31 159 -49 182 -20 5 -93 10 -162 10 l-125 0 -24 65 c-122 341 -393 661 -716 848 -164 95 -375 166 -572 192 -98 13 -273 17 -348 8z" />
          <path d="M1285 3001 c-22 -10 -52 -31 -66 -47 -36 -40 -474 -625 -510 -682 -52 -82 -31 -159 49 -182 20 -5 93 -10 162 -10 l125 0 24 -67 c145 -406 500 -774 906 -938 339 -137 724 -150 1066 -35 332 111 650 352 846 640 39 57 133 222 133 232 0 4 -130 8 -290 8 -159 0 -290 -4 -290 -8 0 -19 -147 -166 -222 -222 -195 -147 -413 -220 -658 -220 -223 0 -416 57 -600 179 -69 45 -200 169 -254 241 -42 55 -116 172 -116 184 0 3 66 6 148 6 123 0 154 4 189 19 78 36 86 103 22 201 -58 91 -438 631 -463 659 -27 30 -92 61 -131 61 -16 0 -48 -9 -70 -19z" />
        </g>
      </svg>
    );
  }
}

export default RepeatIcon;
