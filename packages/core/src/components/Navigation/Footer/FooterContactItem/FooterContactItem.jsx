import React from 'react';
import PropTypes from 'prop-types';

import { GridCol } from '../../..';

export default function FooterContactItem({ children, slimFooter }) {
  return slimFooter ? (
    <GridCol width="auto" mobile={12} desktop="auto">
      <div className="usa-footer__contact-info">{children}</div>
    </GridCol>
  ) : (
    <GridCol width="auto">{children}</GridCol>
  );
}

FooterContactItem.propTypes = {
  children: PropTypes.node.isRequired,
  /** Set automatically by the Footer component it is used in */
  slimFooter: PropTypes.bool
};

FooterContactItem.defaultProps = {
  slimFooter: false
};
