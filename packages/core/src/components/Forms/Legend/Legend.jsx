import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Legend({ children, error, screenReaderOnly }) {
  return (
    <legend
      className={createClassString([
        'usa-legend',
        error ? 'usa-label--error' : '',
        screenReaderOnly ? 'usa-sr-only' : ''
      ])}
    >
      {children}
    </legend>
  );
}

Legend.displayName = 'Legend';

Legend.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * If a truthy value is passed in, the label will be
   * highlighted indicating there is an error.
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** If `true`, the label will only be visible to screen readers */
  screenReaderOnly: PropTypes.bool
};

Legend.defaultProps = {
  screenReaderOnly: false
};
