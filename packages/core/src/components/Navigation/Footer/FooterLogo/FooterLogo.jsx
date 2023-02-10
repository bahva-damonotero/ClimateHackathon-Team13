import React from 'react';
import PropTypes from 'prop-types';

import { GridCol } from '../../..';

export default function FooterLogo({ children, logoDesc, logoSrc }) {
  if (logoSrc && !logoDesc) {
    throw new Error('`logoDesc` must be provided when using `logoSrc`.');
  }

  return (
    <>
      {logoSrc && (
        <GridCol mobile="auto">
          <img className="usa-footer__logo-img" src={logoSrc} alt={logoDesc} />
        </GridCol>
      )}

      <GridCol mobile="auto">
        <h3 className="usa-footer__logo-heading">{children}</h3>
      </GridCol>
    </>
  );
}

FooterLogo.displayName = 'FooterLogo';

FooterLogo.propTypes = {
  /** Agency name or text to accompany the logo */
  children: PropTypes.node.isRequired,
  /** Logo image description for screen readers */
  logoDesc: PropTypes.string,
  /** URL or path for the logo image */
  logoSrc: PropTypes.string
};
