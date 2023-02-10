import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function GridContainer({ children, className, ...props }) {
  return (
    <div
      className={createClassString(['grid-container', className])}
      {...props}
    >
      {children}
    </div>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string
};
