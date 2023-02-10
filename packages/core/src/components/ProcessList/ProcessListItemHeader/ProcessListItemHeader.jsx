import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function ProcessListHeader({ children, className }) {
  return (
    <h4 className={createClassString(['usa-process-list__heading', className])}>
      {children}
    </h4>
  );
}

ProcessListHeader.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply to the header */
  className: PropTypes.string
};
