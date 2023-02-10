import React from 'react';
import {
  Button,
  Footer,
  FooterContactInfo,
  FooterContactItem,
  FooterLinks,
  FooterLogo,
  FooterPrimaryContent,
  FooterSocialLink,
  FooterSocialLinks,
  Form,
  Input
} from '@boozallen-uip/uswds-react-core';

import logoSrc from '../../../../assets/logo.png';

export default function FooterBigExample() {
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

      <FooterLinks
        links={[
          {
            header: 'Section 1',
            links
          },
          {
            header: 'Section 2',
            links
          }
        ]}
      />

      <FooterPrimaryContent>
        <div className="usa-sign-up">
          <h3 className="usa-sign-up__heading">Sign Up</h3>
          <Form>
            <Input id="email">Your email address</Input>
            <Button type="submit">Sign up</Button>
          </Form>
        </div>
      </FooterPrimaryContent>

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
