import React from 'react';
import {
  Footer,
  FooterContactInfo,
  FooterContactItem,
  FooterLinks,
  FooterLogo,
  FooterSocialLink,
  FooterSocialLinks
} from '@boozallen-uip/uswds-react-core';

import logoSrc from '../../../../assets/logo.png';

export default function FooterMediumExample() {
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
    <Footer>
      <FooterLogo logoSrc={logoSrc} logoDesc="Booz Allen Hamilton logo">
        Booz Allen Hamilton
      </FooterLogo>

      <FooterLinks links={links} />

      <FooterSocialLinks>
        <FooterSocialLink
          type="facebook"
          url="https://www.facebook.com/boozallen/"
        />
        <FooterSocialLink type="twitter" url="https://twitter.com/BoozAllen" />
        <FooterSocialLink
          type="youtube"
          url="https://www.youtube.com/channel/UCKW7Fs2rRPDraR_0fqGOKIQ"
        />
        <FooterSocialLink
          type="instagram"
          url="https://www.instagram.com/boozallen"
        />
        <FooterSocialLink
          type="linkedin"
          url="https://www.linkedin.com/company/booz-allen-hamilton"
        />
        <FooterSocialLink type="rss" url="#" />
      </FooterSocialLinks>

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
