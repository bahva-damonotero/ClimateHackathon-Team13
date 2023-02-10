import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Form({
  children,
  className,
  large,
  onSubmit,
  ...props
}) {
  return (
    <form
      className={createClassString([
        'usa-form',
        large ? 'usa-form--large' : '',
        className
      ])}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** If `true`, the width of the form is almost doubled */
  large: PropTypes.bool,
  /** Function called when the form is submitted */
  onSubmit: PropTypes.func
};

Form.defaultProps = {
  large: false
};
