import PropTypes from 'prop-types';
import React from 'react';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Tag({ children, className, large, ...props }) {
  return (
    <span
      className={createClassString([
        'usa-tag',
        large ? 'usa-tag--big' : '',
        className
      ])}
      {...props}
    >
      {children}
    </span>
  );
}

Tag.propTypes = {
  /** Body content of the tag */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** If `true`, the size is increased slightly */
  large: PropTypes.bool
};

Tag.defaultProps = {
  large: false
};
