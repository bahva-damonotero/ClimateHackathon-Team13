import React from 'react';
import PropTypes from 'prop-types';

export default function CollectionItem({ children }) {
  return (
    <li className="usa-collection__item">
      <div className="usa-collection__body">{children}</div>
    </li>
  );
}

CollectionItem.propTypes = {
  /** Makes up the content the Collection component */
  children: PropTypes.node
};
