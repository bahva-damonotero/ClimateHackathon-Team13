import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function FormGroup({ children, className, error, ...props }) {
  const classes = createClassString([
    'usa-form-group',
    error ? 'usa-form-group--error' : '',
    className
  ]);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** If true, a vertical, red bar is shown to the left of the form group */
  error: PropTypes.bool
};

FormGroup.defaultProps = {
  error: false
};
