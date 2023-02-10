import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function CardGroup({ children, className }) {
  return (
    <div className={createClassString(['usa-card-group', className])}>
      {children}
    </div>
  );
}

CardGroup.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string
};
