import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Hint({ children, className, ...props }) {
  return (
    <span className={createClassString(['usa-hint', className])} {...props}>
      {children}
    </span>
  );
}

Hint.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string
};
