import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Label({ children, error, id, target }) {
  return (
    <label
      className={createClassString([
        'usa-label',
        error ? 'usa-label--error' : ''
      ])}
      id={id}
      htmlFor={target}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  /** Error message to display */
  error: PropTypes.string,
  /** ID of the label */
  id: PropTypes.string,
  /** ID of the input this label is associated with */
  target: PropTypes.string.isRequired
};
