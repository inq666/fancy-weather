import React from 'react';
import '../../sass/vendors/_animation.scss';

const ThunderstormWithRain = () => (
  <svg xmlns="http://www.w3.org/2000/svg">
    <g>
      <g fill="#43647E" className="rain-drops rain__thunder">
        <path d="m69.942 143.08c-0.852 6.32-11.666 18.842-11.666 27.824 0 6.443 5.225 11.664 11.666 11.664 6.443 0 11.666-5.221 11.666-11.664 0-9.383-10.912-21.353-11.666-27.824z" />
        <path d="m110.13 143.08c-0.854 6.32-11.666 18.842-11.666 27.824 0 6.443 5.223 11.664 11.666 11.664s11.666-5.221 11.666-11.664c0-9.383-10.914-21.353-11.666-27.824z" />
        <path d="m150.31 143.08c-0.854 6.32-11.664 18.842-11.664 27.824 0 6.443 5.223 11.664 11.664 11.664 6.445 0 11.666-5.221 11.666-11.664 0-9.383-10.912-21.353-11.666-27.824z" />
      </g>
      <g>
        <path d="m47.2 40h-39.3c-4.4 0-7.9-3.5-7.9-7.9 0-4.3 3.5-7.9 7.9-7.9h39.4c4.3 0 7.9 3.5 7.9 7.9-0.1 4.4-3.6 7.9-8 7.9z" className="white" />
        <circle cx="17.4" cy="22.8" r="9.3" className="white" />
        <circle cx="34.5" cy="21.1" r="15.6" className="white" />
      </g>
      <g>
        <path d="m54.7 22.3h-21.3c-3.3 0-6-2.7-6-6s2.7-6 6-6h21.3c3.3 0 6 2.7 6 6s-2.7 6-6 6z" className="gray" />
        <circle cx="45.7" cy="10.7" r="10.7" className="gray" />
        <animateTransform attributeName="transform" attributeType="XML" calcMode="linear" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" type="translate" values="0;-3;0" />
      </g>
      <g>
        <path d="m43.6 22.7c-0.2 0.6-0.4 1.3-0.6 1.9s-0.4 1.2-0.7 1.8c-0.4 1.2-0.9 2.4-1.5 3.5-1 2.3-2.2 4.6-3.4 6.8l-1.7-2.9c3.2-0.1 6.3-0.1 9.5 0l3 0.1-1.3 2.5c-1.1 2.1-2.2 4.2-3.5 6.2-0.6 1-1.3 2-2 3s-1.4 2-2.2 2.9c0.2-1.2 0.5-2.4 0.8-3.5 0.3-1.2 0.6-2.3 1-3.4 0.7-2.3 1.5-4.5 2.4-6.7l1.7 2.7c-3.2 0.1-6.3 0.2-9.5 0l-3.4-0.1 1.8-2.8c1.4-2.1 2.8-4.2 4.3-6.2l2.4-3c0.4-0.5 0.8-1 1.3-1.5 0.7-0.3 1.1-0.8 1.6-1.3z" className="yellow" />
        <animate attributeName="opacity" attributeType="CSS" calcMode="linear" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;0;1" />
      </g>
    </g>
  </svg>
);

export default ThunderstormWithRain;
