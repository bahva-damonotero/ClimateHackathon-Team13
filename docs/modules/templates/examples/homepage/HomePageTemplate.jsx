import React from 'react';
import {
  AlertOutlet,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  CardMedia,
  Footer,
  FooterContactInfo,
  FooterContactItem,
  FooterLinks,
  FooterLogo,
  FooterSocialLink,
  FooterSocialLinks,
  GridCol,
  GridContainer,
  GridRow,
  Header,
  HeaderNavigation,
  HeaderTitle,
  Hero,
  NavigationDropdown,
  NavigationLink,
  Search,
  Section,
  SkipNav,
  ToastOutlet,
  USGovernmentBanner
} from '@boozallen-uip/uswds-react-core';
import imgCircle from '@uswds/uswds/img/circle-124.png';

import logo from '../../../assets/logo.png';
import heroBackground from '../../../assets/background.jpeg';
import './layout.scss';

export default function HomePageTemplate() {
  const agency = '@boozallen-uip/uswds-react';
  const email = 'info@agency.gov';

  const links = [
    {
      href: 'home-page-template',
      text: 'Link 1'
    },
    {
      href: 'home-page-template',
      text: 'Link 2'
    }
  ];
  const groupedLinks = [[...links], [...links], [...links]];

  const heroHeading = (
    <>
      <span className="usa-hero__heading--alt">Hero callout:</span>
      Bring attention to a project priority
    </>
  );

  // eslint-disable-next-line react/prop-types
  const GraphicHeading = ({ children, heading }) => (
    <div className="usa-media-block tablet:grid-col">
      <img className="usa-media-block__img" src={imgCircle} alt="Alt text" />
      <div className="usa-media-block__body">
        <h2 className="usa-graphic-list__heading">{heading}</h2>
        <p>{children}</p>
      </div>
    </div>
  );

  return (
    <>
      <SkipNav href="#main-content" />
      <div id="headerAndMain">
        <USGovernmentBanner />

        <div className="sitewide-alerts">
          <AlertOutlet name="sitewide" />
        </div>

        <Header>
          <HeaderTitle>{agency}</HeaderTitle>

          <HeaderNavigation>
            <NavigationDropdown id="nav-links-1" links={links}>
              Dropdown Example
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
          {/* page content goes here */}
          <Hero background={heroBackground} heading={heroHeading}>
            <p>
              Support the callout with some short explanatory text. You don’t
              need more than a couple of sentences.
            </p>
          </Hero>

          <Section>
            <GridContainer>
              <GridRow gaps>
                <GridCol tablet={4}>
                  <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                    A tagline highlights your approach
                  </h2>
                </GridCol>

                <GridCol tablet={8} className="usa-prose">
                  <p>
                    The tagline should inspire confidence and interest, focusing
                    on the value that your overall approach offers to your
                    audience. Use a heading typeface and keep your tagline to
                    just a few words, and don’t confuse or mystify.
                  </p>

                  <p>
                    Use the right side of the grid to explain the tagline a bit
                    more. What are your goals? How do you do your work? Write in
                    the present tense, and stay brief here. People who are
                    interested can find details on internal pages.
                  </p>
                </GridCol>
              </GridRow>
            </GridContainer>
          </Section>

          <section className="usa-graphic-list usa-section usa-section--dark">
            <div className="grid-container">
              <div className="usa-graphic-list__row grid-row grid-gap">
                <GraphicHeading heading="Graphic headings can vary.">
                  Graphic headings can be used a few different ways, depending
                  on what your landing page is for. Highlight your values,
                  specific program areas, or results.
                </GraphicHeading>

                <GraphicHeading heading="Stick to 6 or fewer words.">
                  Keep body text to about 30 words. They can be shorter, but try
                  to be somewhat balanced across all four. It creates a clean
                  appearance with good spacing.
                </GraphicHeading>
              </div>

              <div className="usa-graphic-list__row grid-row grid-gap">
                <GraphicHeading heading="Never highlight anything without a goal.">
                  For anything you want to highlight here, understand what your
                  users know now, and what activity or impression you want from
                  them after they see it.
                </GraphicHeading>

                <GraphicHeading heading="Could also have 2 or 6.">
                  In addition to your goal, find out your users’ goals. What do
                  they want to know or do that supports your mission? Use these
                  headings to show those.
                </GraphicHeading>
              </div>
            </div>
          </section>

          <Section>
            <GridContainer>
              <h2 className="font-heading-xl margin-y-0">Section heading</h2>

              <p className="usa-intro">
                Everything up to this point should help people understand your
                agency or project: who you are, your goal or mission, and how
                you approach it. Use this section to encourage them to act.
                Describe why they should get in touch here, and use an active
                verb on the button below. “Get in touch,” “Learn more,” and so
                on.
              </p>

              <Button big>Call to action</Button>
            </GridContainer>
          </Section>

          <Section>
            <GridContainer>
              <CardGroup>
                {[...Array(3)].map((value, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Card className="tablet:grid-col" key={index}>
                    <CardHeader level={2}>Card Title</CardHeader>

                    <CardMedia src="./Charleston_SC_Collage.jpg">
                      Clockwise from top-left: Rainbow Row, Arthur Ravenel Jr.
                      Bridge, cobblestone street, McLeod Plantation, battery,
                      Fort Sumter
                    </CardMedia>

                    <CardBody>
                      <p>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in print and digital design to create a
                        natural looking block of text that does not distract
                        from the layout.
                      </p>
                    </CardBody>

                    <CardFooter>
                      <Button>Button action</Button>
                    </CardFooter>
                  </Card>
                ))}
              </CardGroup>
            </GridContainer>
          </Section>
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
    </>
  );
}
