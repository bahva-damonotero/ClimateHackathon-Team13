import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderNavigation({ children }) {
  return <ul className="usa-nav__primary usa-accordion">{children}</ul>;
}

HeaderNavigation.displayName = 'HeaderNavigation';

HeaderNavigation.propTypes = {
  /** `<NavigationDropdown />` and/or `<NavigationLink />` node(s) */
  children: PropTypes.node.isRequired
};
