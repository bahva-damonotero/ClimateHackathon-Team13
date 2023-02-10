import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { render } from '@testing-library/react';
import footer from '@uswds/uswds/js/usa-footer';

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

describe('Footer', () => {
  const agency = '@boozallen-uip/uswds-react';
  const email = 'info@agency.gov';
  const logoSrc = 'image.jpeg';
  const logoDesc = 'Logo';
  const phone = '(800) CALL-GOVT';

  const logo = (
    <FooterLogo logoSrc={logoSrc} logoDesc={logoDesc}>
      {agency}
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

  const primaryContent = (
    <FooterPrimaryContent>
      <p>Some primary content to go in the footer.</p>
    </FooterPrimaryContent>
  );
  const primaryContentHTML = renderToStaticMarkup(primaryContent);

  const facebook = 'https://www.facebook.com/boozallen/';
  const twitter = 'https://twitter.com/BoozAllen';
  const youtube = 'https://www.youtube.com/channel/UCKW7Fs2rRPDraR_0fqGOKIQ';
  const instagram = 'https://www.instagram.com/boozallen';
  const linkedin = 'https://www.linkedin.com/company/booz-allen-hamilton/';
  const rss = 'http://somefakewebsite.org/rss.xml';

  const socialLinks = (
    <FooterSocialLinks>
      <FooterSocialLink type="facebook" url={facebook} />
      <FooterSocialLink type="twitter" url={twitter} />
      <FooterSocialLink type="youtube" url={youtube} />
      <FooterSocialLink type="instagram" url={instagram} />
      <FooterSocialLink type="linkedin" url={linkedin} />
      <FooterSocialLink type="rss" url={rss} />
    </FooterSocialLinks>
  );

  const contactInfo = (
    <FooterContactInfo>
      <FooterContactItem>
        <a href="tel:1-800-555-5555">{phone}</a>
      </FooterContactItem>

      <FooterContactItem>
        <a href={`mailto:${email}`}>{email}</a>
      </FooterContactItem>
    </FooterContactInfo>
  );

  const LOGO_IMG_SELECTOR = '.usa-footer__logo-img';
  const LOGO_HEADING_SELECTOR = '.usa-footer__logo-heading';
  const CONTACT_INFO_SELECTOR =
    '.usa-footer__address .usa-footer__contact-info a';

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'matchMedia', {});
  });

  it('should render correctly', () => {
    const { container } = render(
      <Router>
        <Footer>
          {logo}
          {links}
          {contactInfo}
        </Footer>
      </Router>
    );

    const imgNode = container.querySelector(LOGO_IMG_SELECTOR);
    expect(imgNode.getAttribute('src')).toBe(logoSrc);
    expect(imgNode.getAttribute('alt')).toBe(logoDesc);

    expect(container.querySelector(LOGO_HEADING_SELECTOR).innerHTML).toBe(
      agency
    );

    const [phoneNode, emailNode] = container.querySelectorAll(
      CONTACT_INFO_SELECTOR
    );

    expect(phoneNode.innerHTML).toBe(phone);
    expect(emailNode.innerHTML).toBe(email);
  });

  it('should render the "big" footer variant', () => {
    const { container } = render(
      <Router>
        <Footer>
          {logo}
          {bigLinks}
          {contactInfo}
        </Footer>
      </Router>
    );

    expect(container.querySelector('.usa-footer--big')).toBeTruthy();
  });

  it('should render the "slim" footer variant', () => {
    const { container } = render(
      <Router>
        <Footer slim>
          {logo}
          {links}
          {socialLinks}
          {contactInfo}
        </Footer>
      </Router>
    );

    expect(container.querySelector('.usa-footer--slim')).toBeTruthy();
  });

  it('should render social links properly', () => {
    const { container } = render(
      <Router>
        <Footer>
          {logo}
          {socialLinks}
          {contactInfo}
        </Footer>
      </Router>
    );

    const anchorNodes = container.getElementsByClassName('usa-social-link');
    expect(anchorNodes[0].getAttribute('href')).toBe(facebook);
    expect(anchorNodes[1].getAttribute('href')).toBe(twitter);
    expect(anchorNodes[2].getAttribute('href')).toBe(youtube);
    expect(anchorNodes[3].getAttribute('href')).toBe(instagram);
    expect(anchorNodes[4].getAttribute('href')).toBe(linkedin);
    expect(anchorNodes[5].getAttribute('href')).toBe(rss);
  });

  it('should render primary content with links properly', () => {
    const { container } = render(
      <Router>
        <Footer>
          {logo}
          {links}
          {primaryContent}
          {contactInfo}
        </Footer>
      </Router>
    );

    expect(
      container.querySelector(
        '.usa-footer__primary-section > .grid-container > .grid-row.grid-gap-4 > .tablet\\:grid-col-4'
      ).innerHTML
    ).toBe(primaryContentHTML);
  });

  it('should render primary content with grouped links properly', () => {
    const { container } = render(
      <Router>
        <Footer>
          {logo}
          {bigLinks}
          {primaryContent}
          {contactInfo}
        </Footer>
      </Router>
    );

    expect(
      container.querySelector(
        '.usa-footer__primary-section .tablet\\:grid-col-4'
      ).innerHTML
    ).toBe(primaryContentHTML);
  });

  it('should render primary content without links properly', () => {
    const { container } = render(
      <Router>
        <Footer>
          {logo}
          {primaryContent}
          {contactInfo}
        </Footer>
      </Router>
    );

    expect(
      container.querySelector('.usa-footer__primary-section > .grid-container')
        .innerHTML
    ).toBe(primaryContentHTML);
  });

  it('should throw an error when an invalid component is used in the Footer', () => {
    expect(() => {
      render(
        <Router>
          <Footer>
            <span>Some content that doesn't belong here.</span>
          </Footer>
        </Router>
      );
    }).toThrow("Invalid child component 'undefined' used in Footer.");
  });

  it('should call `footer.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(footer, 'on');

    render(
      <Router>
        <Footer>
          {logo}
          {contactInfo}
        </Footer>
      </Router>
    );

    expect(onSpy).toHaveBeenCalled();
  });
});
