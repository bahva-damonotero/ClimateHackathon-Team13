import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function CollectionMetaItem({ children, newTag, tag }) {
  return (
    <li
      className={createClassString([
        'usa-collection__meta-item',
        newTag ? 'usa-tag usa-tag--new' : '',
        tag ? 'usa-tag' : ''
      ])}
    >
      {children}
    </li>
  );
}

CollectionMetaItem.propTypes = {
  /** Contents of the collection list item */
  children: PropTypes.node.isRequired,
  /** If `true`, the tag will be highlighted */
  newTag: PropTypes.bool,
  /** If `true`, the child will be presented as a tag */
  tag: PropTypes.bool
};

CollectionMetaItem.defaultProps = {
  newTag: false,
  tag: false
};
