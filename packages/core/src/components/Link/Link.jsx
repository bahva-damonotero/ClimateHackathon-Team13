import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

export default function Link({ children, external, href, target, ...props }) {
  const useRouterLink =
    !external &&
    href.substring(0, 4) !== 'tel:' &&
    href.substring(0, 7) !== 'mailto:' &&
    !href.includes('://');

  return useRouterLink ? (
    <HashLink smooth to={href} {...props}>
      {children}
    </HashLink>
  ) : (
    <a href={href} target={target} {...props}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
  target: PropTypes.string
};

Link.defaultProps = {
  external: false
};
