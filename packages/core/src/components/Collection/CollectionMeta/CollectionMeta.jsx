import React from 'react';
import PropTypes from 'prop-types';

export default function CollectionMeta({ children, label }) {
  return (
    <ul className="usa-collection__meta" aria-label={label}>
      {children}
    </ul>
  );
}

CollectionMeta.propTypes = {
  /** Contents of the Collection's unordered list */
  children: PropTypes.node.isRequired,
  /** Allows you to override the default 'aria-label' of "More information" */
  label: PropTypes.string
};

CollectionMeta.defaultProps = {
  label: 'More information'
};
