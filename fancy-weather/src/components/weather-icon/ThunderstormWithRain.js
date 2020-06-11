import React from 'react';
import '../../sass/vendors/_animation.scss';

const ThunderstormWithRain = () => (
  <svg id="Layer_1 icon">
    <g id="Cloud_6">
      <g className="rain-drops rain__thunder">
        <path
          fill="#43647E"
          d="M69.942,143.08c-0.852,6.32-11.666,18.842-11.666,27.824c0,6.443,5.225,11.664,11.666,11.664
        c6.443,0,11.666-5.221,11.666-11.664C81.608,161.521,70.696,149.551,69.942,143.08z"
        />
        <path
          fill="#43647E"
          d="M110.126,143.08c-0.854,6.32-11.666,18.842-11.666,27.824c0,6.443,5.223,11.664,11.666,11.664
        s11.666-5.221,11.666-11.664C121.792,161.521,110.878,149.551,110.126,143.08z"
        />
        <path
          fill="#43647E"
          d="M150.308,143.08c-0.854,6.32-11.664,18.842-11.664,27.824c0,6.443,5.223,11.664,11.664,11.664
        c6.445,0,11.666-5.221,11.666-11.664C161.974,161.521,151.062,149.551,150.308,143.08z"
        />
      </g>
      <g id="White_cloud_6">
        <path id="XMLID_81_" className="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z" />
        <circle id="XMLID_80_" className="white" cx="17.4" cy="22.8" r="9.3" />
        <circle id="XMLID_77_" className="white" cx="34.5" cy="21.1" r="15.6" />
      </g>
      <g id="Gray_cloud_6">
        <path id="XMLID_75_" className="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z" />
        <circle id="XMLID_74_" className="gray" cx="45.7" cy="10.7" r="10.7" />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="6s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          type="translate"
          values="0;-3;0"
          calcMode="linear"
        />
      </g>

      <g id="Lightning_6">
        <path
          id="XMLID_94_"
          className="yellow"
          d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
    c-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
    c-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
    l-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"
        />
        <animate
          attributeType="CSS"
          attributeName="opacity"
          dur="1.5s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="1;0;1"
          calcMode="linear"
        />
      </g>
    </g>
  </svg>
);

export default ThunderstormWithRain;
