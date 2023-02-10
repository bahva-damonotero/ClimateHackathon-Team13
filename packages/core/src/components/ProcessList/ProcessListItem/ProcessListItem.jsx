import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function ProcessListItem({ children, className }) {
  return (
    <li className={createClassString(['usa-process-list__item', className])}>
      {children}
    </li>
  );
}

ProcessListItem.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply to the list item */
  className: PropTypes.string
};
