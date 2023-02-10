import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function IconList({
  children,
  className,
  color,
  size,
  ...props
}) {
  return (
    <ul
      className={createClassString([
        'usa-icon-list',
        color ? `usa-icon-list--${color}` : '',
        size ? `usa-icon-list--size-${size}` : '',
        className
      ])}
      {...props}
    >
      {children}
    </ul>
  );
}

IconList.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Color for the icons. For options, see here: https://designsystem.digital.gov/utilities/color/ */
  color: PropTypes.string,
  /** The size of the list */
  size: PropTypes.oneOf(['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'])
};
