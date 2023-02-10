import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';
import { Link } from '../..';

function renderSideNavigationItem(
  { current, href, sublist, text, className, ...props },
  key
) {
  return (
    <li className="usa-sidenav__item" key={key}>
      <Link
        className={
          current ? createClassString(['usa-current', className]) : className
        }
        href={href}
        {...props}
      >
        {text}
      </Link>

      {sublist && (
        <ul className="usa-sidenav__sublist">
          {sublist.map(renderSideNavigationItem)}
        </ul>
      )}
    </li>
  );
}

export default function SideNavigation({ items, ...props }) {
  return (
    <nav aria-label="Secondary navigation" {...props}>
      <ul className="usa-sidenav">{items.map(renderSideNavigationItem)}</ul>
    </nav>
  );
}

const SideNavigationPropType = PropTypes.shape({
  current: PropTypes.bool,
  href: PropTypes.string.isRequired,
  sublist: PropTypes.arrayOf(PropTypes.shape(this)),
  text: PropTypes.string.isRequired
});

SideNavigation.propTypes = {
  /** Array of links to show */
  items: PropTypes.arrayOf(SideNavigationPropType).isRequired
};
