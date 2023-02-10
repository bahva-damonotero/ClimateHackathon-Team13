import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function IconListItem({ children, className, ...props }) {
  return (
    <li
      className={createClassString(['usa-icon-list__item', className])}
      {...props}
    >
      {children}
    </li>
  );
}

IconListItem.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string
};
