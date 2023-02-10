import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {
  AlertOutlet,
  Footer,
  FooterContactInfo,
  FooterContactItem,
  FooterLinks,
  FooterLogo,
  FooterSocialLink,
  FooterSocialLinks,
  Header,
  HeaderNavigation,
  HeaderTitle,
  NavigationDropdown,
  NavigationLink,
  Search,
  SkipNav,
  ToastOutlet,
  USGovernmentBanner
} from '@boozallen-uip/uswds-react-core';

import { HomePage } from './pages';

import logo from './assets/logo.png';

export default function App() {
  const agency = '@boozallen-uip/uswds-react';
  const email = 'info@agency.gov';

  const exampleLinks = [
    {
      href: '#',
      text: 'Link 1'
    },
    {
      href: '#',
      text: 'Link 2'
    }
  ];

  const links = [
    {
      href: '#',
      text: 'Link 1'
    },
    {
      href: 'https://boozallen.com',
      text: 'External link',
      target: '_blank'
    }
  ];
  const groupedLinks = [[...links], [...links], [...links]];

  return (
    <Router>
      <SkipNav href="#main-content" />

      <div id="headerAndMain">
        <USGovernmentBanner />

        <div className="sitewide-alerts">
          <AlertOutlet name="sitewide" />
        </div>

        <Header>
          <HeaderTitle>{agency}</HeaderTitle>

          <HeaderNavigation>
            <NavigationDropdown id="nav-links-1" links={exampleLinks}>
              Examples
            </NavigationDropdown>

            <NavigationDropdown id="nav-links-2" links={groupedLinks}>
              Mega-Menu Example
            </NavigationDropdown>

            <NavigationLink href="https://github.com/boozallen-uip/uswds-react">
              Github Repo
            </NavigationLink>
          </HeaderNavigation>

          <Search onSearch={() => {}} size="small" />
        </Header>

        <main id="main-content">
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </main>
      </div>

      <Footer>
        <FooterLogo logoSrc={logo} logoDesc="Booz Allen Hamilton logo">
          {agency}
        </FooterLogo>

        <FooterLinks links={links} />

        <FooterSocialLinks>
          <FooterSocialLink
            type="facebook"
            url="https://www.facebook.com/boozallen/"
          />
          <FooterSocialLink
            type="twitter"
            url="https://twitter.com/BoozAllen"
          />
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

      <ToastOutlet />
    </Router>
  );
}
