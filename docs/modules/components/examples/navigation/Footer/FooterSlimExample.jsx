import React from 'react';
import {
  Footer,
  FooterContactInfo,
  FooterContactItem,
  FooterLinks,
  FooterLogo
} from '@boozallen-uip/uswds-react-core';

import logoSrc from '../../../../assets/logo.png';

export default function FooterSlimExample() {
  const email = 'info@agency.gov';

  const links = [
    {
      href: '#',
      text: 'Link 1'
    },
    {
      href: '#',
      text: 'Link 2'
    },
    {
      href: '#',
      text: 'Link 3'
    },
    {
      href: '#',
      text: 'Link 4'
    }
  ];

  return (
    <Footer slim>
      <FooterLogo logoSrc={logoSrc} logoDesc="Booz Allen Hamilton logo">
        Booz Allen Hamilton
      </FooterLogo>

      <FooterLinks links={links} />

      <FooterContactInfo>
        <FooterContactItem>
          <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
        </FooterContactItem>

        <FooterContactItem>
          <a href={`mailto:${email}`}>{email}</a>
        </FooterContactItem>
      </FooterContactInfo>
    </Footer>
  );
}
