import React from 'react';
import PropTypes from 'prop-types';

export default function CollectionHeading({ children }) {
  return <h3 className="usa-collection__heading">{children}</h3>;
}

CollectionHeading.propTypes = {
  /** Contents of the Collection's heading */
  children: PropTypes.node.isRequired
};
