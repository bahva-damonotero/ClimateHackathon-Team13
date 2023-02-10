import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';
import { Link } from '../../..';

export default function NavigationLink({
  active,
  href,
  children,
  className,
  secondary,
  ...props
}) {
  const classes = createClassString([
    secondary ? 'usa-nav__secondary-item' : 'usa-nav__primary-item',
    className
  ]);

  return secondary ? (
    <li className={classes} {...props}>
      <Link href={href}>{children}</Link>
    </li>
  ) : (
    <li className={classes} {...props}>
      <Link
        className={createClassString([
          'usa-nav__link',
          active ? 'usa-current' : ''
        ])}
        href={href}
      >
        <span>{children}</span>
      </Link>
    </li>
  );
}

NavigationLink.propTypes = {
  /**
   * If `true`, apply special styling denoting this as the active or current page.
   *  This does nothing if `secondary` is also `true`.
   */
  active: PropTypes.bool,
  /** Link content */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** URL to go to when the link is clicked */
  href: PropTypes.string.isRequired,
  /**
   * If `true`, style the link in a way to be shown above the header's search bar.
   * This prop is automatically set to `true` when using this component inside a
   * `<HeaderSecondaryNavigation />` component.
   */
  secondary: PropTypes.bool
};

NavigationLink.defaultProps = {
  secondary: false
};
