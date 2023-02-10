import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../../..';

export default function HeaderTitle({ ariaLabel, children }) {
  return (
    <div className="usa-logo" id="header-logo">
      <em className="usa-logo__text">
        <Link href="/" title="Home" aria-label={ariaLabel}>
          {children}
        </Link>
      </em>
    </div>
  );
}

HeaderTitle.displayName = 'HeaderTitle';

HeaderTitle.propTypes = {
  /** Optional aria-label for link */
  ariaLabel: PropTypes.string,
  /** Header logo and/or title content to display */
  children: PropTypes.node.isRequired
};
