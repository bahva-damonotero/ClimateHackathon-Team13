import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Collection({ children, condensed }) {
  return (
    <ul
      className={createClassString([
        'usa-collection',
        condensed && 'usa-collection--condensed'
      ])}
    >
      {children}
    </ul>
  );
}

Collection.propTypes = {
  /** Contents of the collection */
  children: PropTypes.node.isRequired,
  /** If `true`, the Collection is presented with less space between items */
  condensed: PropTypes.bool
};

Collection.defaultProps = {
  condensed: false
};
