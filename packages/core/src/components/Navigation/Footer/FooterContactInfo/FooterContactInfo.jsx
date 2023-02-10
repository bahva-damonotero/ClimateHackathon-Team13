import React from 'react';
import PropTypes from 'prop-types';

import { GridRow } from '../../..';

export default function FooterContactInfo({ children, heading, slimFooter }) {
  return (
    <>
      {!slimFooter && (
        <h3 className="usa-footer__contact-heading">{heading}</h3>
      )}

      <address className="usa-footer__address">
        <GridRow className={!slimFooter ? 'usa-footer__contact-info' : ''} gaps>
          {slimFooter
            ? children.map((child, i) =>
                React.cloneElement(child, {
                  slimFooter: true,
                  // eslint-disable-next-line react/no-array-index-key
                  key: `contact-info-${i}`
                })
              )
            : children}
        </GridRow>
      </address>
    </>
  );
}

FooterContactInfo.displayName = 'FooterContactInfo';

FooterContactInfo.propTypes = {
  children: PropTypes.node.isRequired,
  /** If not using a slim Footer, allows you to override the "Contact Center" text */
  heading: PropTypes.node,
  /** Set automatically by the Footer component it is used in */
  slimFooter: PropTypes.bool
};

FooterContactInfo.defaultProps = {
  heading: 'Contact Center',
  slimFooter: false
};
