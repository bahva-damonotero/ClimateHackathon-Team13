import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function GridCol({
  children,
  className,
  desktop,
  mobile,
  tablet,
  width,
  ...props
}) {
  const generateClass = ([breakpoint, colWidth]) =>
    colWidth !== undefined
      ? `${breakpoint ? `${breakpoint}:` : ''}grid-col-${colWidth}`
      : '';

  const baseClasses = [
    [null, width],
    ['desktop', desktop],
    ['mobile-lg', mobile],
    ['tablet', tablet]
  ].map(generateClass);

  const baseClassesString = createClassString(baseClasses);
  const allClassesString = createClassString([
    baseClassesString,
    !baseClassesString ? 'grid-col' : '',
    className
  ]);

  return (
    <div className={allClassesString} {...props}>
      {children}
    </div>
  );
}

const widthType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf(['auto', 'fill'])
]);

GridCol.propTypes = {
  children: PropTypes.node,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Width to use at the desktop breakpoint */
  desktop: widthType,
  /** Width to use at the mobile breakpoint */
  mobile: widthType,
  /** Width to use at the tablet breakpoint */
  tablet: widthType,
  /** Default width to use */
  width: widthType
};
