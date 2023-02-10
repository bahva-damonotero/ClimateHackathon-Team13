import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Section({ children, className, ...props }) {
  return (
    <section
      className={createClassString(['usa-section', className])}
      {...props}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string
};
