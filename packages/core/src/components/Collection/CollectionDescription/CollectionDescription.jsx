import React from 'react';
import PropTypes from 'prop-types';

export default function CollectionDescription({ children }) {
  return <p className="usa-collection__description">{children}</p>;
}

CollectionDescription.propTypes = {
  /** Content of the description */
  children: PropTypes.node
};
