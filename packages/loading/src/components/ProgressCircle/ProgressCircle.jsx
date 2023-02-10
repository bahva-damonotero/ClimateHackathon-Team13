import React from 'react';
import PropTypes from 'prop-types';

import { describeArc } from './utils';

export default function ProgressCircle({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  rounded,
  showPercentage,
  size,
  strokeWidth,
  value
}) {
  const actualStrokeWidth = strokeWidth || size / 26;
  const radius = (size - actualStrokeWidth) / 2;
  const center = radius + actualStrokeWidth / 2;
  const endAngle = ((value >= 100 ? 99.9999 : value) / 100) * 360;

  return (
    <div
      aria-live="assertive"
      className="bah-uswds-progress-circle"
      role="alert"
      style={{ width: size, height: size }}
    >
      <svg aria-hidden="true" height={size} width={size}>
        <path
          d={describeArc(center, center, radius, 0, endAngle)}
          fill="none"
          stroke={color}
          strokeWidth={actualStrokeWidth}
        />
        {showPercentage && (
          <text
            x={center}
            y={center - size / 70}
            fontFamily={fontFamily}
            fontSize={fontSize || size / 4}
            fontWeight={fontWeight}
            dominantBaseline="central"
            textAnchor="middle"
          >
            {rounded ? Math.floor(value) : value}%
          </text>
        )}
      </svg>

      <div className="bah-uswds-loading--sr-text">Progress:{value}%</div>
    </div>
  );
}

ProgressCircle.propTypes = {
  /** Color of the progress circle */
  color: PropTypes.string,
  /** Font family used to display percentage */
  fontFamily: PropTypes.string,
  /** Font size used to display percentage */
  fontSize: PropTypes.number,
  /** Font weight used to display percentage */
  fontWeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['normal', 'bold', 'bolder', 'lighter'])
  ]),
  /** If `false`, the displayed percentage will not be rounded down */
  rounded: PropTypes.bool,
  /** If `false`, the percentage is not displayed */
  showPercentage: PropTypes.bool,
  /** Size of the progress circle in pixels */
  size: PropTypes.number,
  /** Stroke width of the progress circle in pixels */
  strokeWidth: PropTypes.number,
  /** Percentage (out of 100) of the progress circle */
  value: PropTypes.number.isRequired
};

ProgressCircle.defaultProps = {
  color: 'blue',
  rounded: true,
  showPercentage: true,
  size: 80
};
