import React from 'react';
import PropTypes from 'prop-types';

import { flattenChildren } from '@boozallen-uip/uswds-react-utils';

export default function HeaderSecondaryNavigation({ children }) {
  return (
    <ul className="usa-nav__secondary-links">
      {flattenChildren(React.Children.toArray(children)).map((child) =>
        React.cloneElement(child, {
          secondary: true
        })
      )}
    </ul>
  );
}

HeaderSecondaryNavigation.displayName = 'HeaderSecondaryNavigation';

HeaderSecondaryNavigation.propTypes = {
  /** `<NavigationLink />` node(s) */
  children: PropTypes.node.isRequired
};
