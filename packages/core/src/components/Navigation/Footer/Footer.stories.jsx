import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import {
  Footer,
  FooterContactInfo,
  FooterContactItem,
  FooterLinks,
  FooterLogo,
  FooterPrimaryContent,
  FooterSocialLink,
  FooterSocialLinks
} from '.';
import { Button, Form, Input } from '../..';

export default {
  title: 'Navigation/Footer',
  component: Footer,
  argTypes: {
    children: {
      control: { type: null }
    }
  }
};

const logo = (
  <FooterLogo
    logoSrc="https://pbs.twimg.com/profile_images/1322245427559804929/wa1w8bnb_400x400.jpg"
    logoDesc="Booz Allen Hamilton logo"
  >
    Booz Allen Hamilton
  </FooterLogo>
);

const linksArray = [
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

const links = <FooterLinks links={linksArray} />;

const bigLinks = (
  <FooterLinks
    links={[
      {
        header: 'Section 1',
        links: linksArray
      },
      {
        header: 'Section 2',
        links: linksArray
      }
    ]}
  />
);

const socialLinks = (
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
);

const email = 'info@agency.gov';

const contactInfo = (
  <FooterContactInfo>
    <FooterContactItem>
      <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
    </FooterContactItem>

    <FooterContactItem>
      <a href={`mailto:${email}`}>{email}</a>
    </FooterContactItem>
  </FooterContactInfo>
);

const Template = (args) => (
  <MemoryRouter>
    <Footer {...args} />
  </MemoryRouter>
);

const defaultArgs = {
  children: (
    <>
      {logo}
      {links}
      {socialLinks}
      {contactInfo}
    </>
  )
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const big = Template.bind({});
big.args = {
  ...defaultArgs,
  children: (
    <>
      {logo}
      {bigLinks}
      {socialLinks}
      {contactInfo}
    </>
  )
};

export const bigWithSignUp = Template.bind({});
bigWithSignUp.args = {
  ...defaultArgs,
  children: (
    <>
      {logo}
      {bigLinks}
      <FooterPrimaryContent>
        <div className="usa-sign-up">
          <h3 className="usa-sign-up__heading">Sign Up</h3>
          <Form>
            <Input id="email">Your email address</Input>
            <Button type="submit">Sign up</Button>
          </Form>
        </div>
      </FooterPrimaryContent>
      {socialLinks}
      {contactInfo}
    </>
  )
};

export const slim = Template.bind({});
slim.args = {
  ...defaultArgs,
  slim: true
};

export const customPrimaryContentWithoutLinks = Template.bind({});
customPrimaryContentWithoutLinks.args = {
  ...defaultArgs,
  children: (
    <>
      {logo}
      <FooterPrimaryContent>
        This is completely custom content for the footer's primary section.
      </FooterPrimaryContent>
      {socialLinks}
      {contactInfo}
    </>
  )
};

export const linksWithCustomPrimaryContent = Template.bind({});
linksWithCustomPrimaryContent.args = {
  ...defaultArgs,
  children: (
    <>
      {logo}
      {links}
      <FooterPrimaryContent>
        <p>this content appears alongside the links</p>
      </FooterPrimaryContent>
      {socialLinks}
      {contactInfo}
    </>
  )
};

export const noLinksOrPrimaryContent = Template.bind({});
noLinksOrPrimaryContent.args = {
  ...defaultArgs,
  children: (
    <>
      {logo}
      {socialLinks}
      {contactInfo}
    </>
  )
};

export const noMediaLinks = Template.bind({});
noMediaLinks.args = {
  ...defaultArgs,
  children: (
    <>
      {logo}
      {links}
      {contactInfo}
    </>
  )
};

export const noReturnToTop = Template.bind({});
noReturnToTop.storyName = 'No "Return to Top"';
noReturnToTop.args = {
  ...defaultArgs,
  showReturnToTop: false
};

export const differentContactHeader = Template.bind({});
differentContactHeader.args = {
  ...defaultArgs,
  children: (
    <>
      {logo}
      {links}
      {socialLinks}

      <FooterContactInfo heading="Contact Us">
        <FooterContactItem>
          <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
        </FooterContactItem>

        <FooterContactItem>
          <a href={`mailto:${email}`}>{email}</a>
        </FooterContactItem>
      </FooterContactInfo>
    </>
  )
};
