import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function ButtonGroup({ children, segmented }) {
  return (
    <ul
      className={createClassString([
        'usa-button-group',
        segmented ? 'usa-button-group--segmented' : ''
      ])}
    >
      {children}
    </ul>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  /** If `true`, then the buttons in the group are connected into one segmented item */
  segmented: PropTypes.bool
};

ButtonGroup.defaultProps = {
  segmented: false
};
