import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { handleSpecialCases } from './utils';

// The number of child DOM nodes needed for each animation type
const typeToCountersMap = {
  'chasing-dots': 2,
  circle: 12,
  'cube-grid': 9,
  'double-bounce': 2,
  'fading-circle': 12,
  'folding-cube': 4,
  pulse: 0,
  'rotating-plane': 0,
  'three-bounce': 3,
  'wandering-cubes': 2,
  wave: 5
};

export default function IndeterminateSpinner({ color, size, type }) {
  const counters = typeToCountersMap[type];
  const className = `bah-uswds-spinner--${type}`;

  const [innerStyle, setInnerStyle] = useState({});
  const [childStyle, setChildStyle] = useState({});

  useEffect(() => {
    handleSpecialCases(size, type, setInnerStyle, setChildStyle);
  }, [size, type]);

  const counterNodes = [];
  for (let i = 1; i <= counters; i++) {
    counterNodes.push(
      <div
        className={`${className}${i} bah-uswds-spinner--child ${color}`}
        key={`${className}${i}`}
        style={childStyle}
      />
    );
  }

  return (
    <div aria-live="assertive" className="bah-uswds-spinner" role="alert">
      <div
        className="bah-uswds-spinner--wrapper"
        style={{ width: size, height: size }}
      >
        <div className={`${className} ${color}`} style={innerStyle}>
          {counterNodes}
        </div>
      </div>

      <div className="bah-uswds-loading--sr-text">Content is loading...</div>
    </div>
  );
}

IndeterminateSpinner.propTypes = {
  /** Color of the spinner */
  color: PropTypes.oneOf([
    'black',
    'white',
    'light-gray',
    'gray',
    'dark-gray',
    'blue-gray',
    'light-blue',
    'blue',
    'dark-blue',
    'light-green',
    'green',
    'dark-green',
    'light-yellow',
    'yellow',
    'dark-yellow',
    'amber',
    'orange',
    'deep-orange',
    'light-red',
    'red',
    'dark-red',
    'light-purple',
    'purple',
    'dark-purple',
    'magenta',
    'light-brown',
    'brown',
    'dark-brown'
  ]),
  /** Size of the spinner in pixels */
  size: PropTypes.number,
  /** Animation type of the spinner */
  type: PropTypes.oneOf([
    'chasing-dots',
    'circle',
    'cube-grid',
    'double-bounce',
    'fading-circle',
    'folding-cube',
    'pulse',
    'rotating-plane',
    'three-bounce',
    'wandering-cubes',
    'wave'
  ])
};

IndeterminateSpinner.defaultProps = {
  color: 'blue',
  size: 80,
  type: 'circle'
};
