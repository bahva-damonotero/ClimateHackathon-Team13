import React from 'react';
import PropTypes from 'prop-types';

import { GridRow } from '../../..';

export default function FooterSocialLinks({ children }) {
  return (
    <GridRow className="usa-footer__social-links" gaps gapSize={1}>
      {children}
    </GridRow>
  );
}

FooterSocialLinks.displayName = 'FooterSocialLinks';

FooterSocialLinks.propTypes = {
  children: PropTypes.node.isRequired
};
