import React from 'react';
import PropTypes from 'prop-types';

import { GridCol, GridRow, Link } from '../../..';

export default function FooterLinks({ links, bigFooter }) {
  return (
    <nav className="usa-footer__nav" aria-label="Footer navigation">
      {bigFooter ? (
        <GridRow gaps gapSize={4}>
          {links.map((group, i) => (
            <GridCol desktop={3} mobile={6} key={`footer-link--${i}`}>
              <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
                <h4 className="usa-footer__primary-link">{group.header}</h4>

                <ul className="usa-list usa-list--unstyled">
                  {group.links.map(({ href, text }, j) => (
                    <li
                      className="usa-footer__secondary-link"
                      key={`footer-link--${i}-${j}`}
                    >
                      <Link href={href}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            </GridCol>
          ))}
        </GridRow>
      ) : (
        <ul className="grid-row grid-gap">
          {links.map(({ href, text }, i) => (
            <li
              className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content"
              key={`footer-link--${i}`}
            >
              <Link className="usa-footer__primary-link" href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

FooterLinks.displayName = 'FooterLinks';

const linkShape = PropTypes.shape({
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

const groupOfLinksShape = PropTypes.shape({
  header: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(linkShape).isRequired
});

FooterLinks.propTypes = {
  /** Set automatically by the Footer component it is used in */
  bigFooter: PropTypes.bool,
  /** Array of links or grouped links */
  links: PropTypes.arrayOf(PropTypes.oneOfType([linkShape, groupOfLinksShape]))
    .isRequired
};

FooterLinks.defaultProps = {
  bigFooter: false
};
