import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function IconListContent({ children, className, ...props }) {
  return (
    <div
      className={createClassString(['usa-icon-list__content', className])}
      {...props}
    >
      {children}
    </div>
  );
}

IconListContent.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string
};
