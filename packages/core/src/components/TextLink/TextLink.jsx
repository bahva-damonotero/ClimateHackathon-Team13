import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';
import { Link } from '..';

export default function TextLink({
  children,
  className,
  external,
  href,
  ...props
}) {
  return (
    <Link
      className={createClassString([
        'usa-link',
        external ? 'usa-link--external' : '',
        className
      ])}
      external={external}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

TextLink.propTypes = {
  /** Link content */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /**
   * If `true`, display an icon next to the link
   * denoting it as external.
   */
  external: PropTypes.bool,
  /** URL to go to when the link is clicked */
  href: PropTypes.string.isRequired
};

TextLink.defaultProps = {
  external: false
};
