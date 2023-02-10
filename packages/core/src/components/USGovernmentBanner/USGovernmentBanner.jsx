import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import accordion from '@uswds/uswds/js/usa-accordion';
import imgDotGov from '@uswds/uswds/img/icon-dot-gov.svg';
import imgFlag from '@uswds/uswds/img/us_flag_small.png';
import imgHttps from '@uswds/uswds/img/icon-https.svg';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

import { GridCol } from '../Grid';

export default function USGovernmentBanner({ className, domain }) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    accordion.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      accordion.off(containerEl);
    };
  }, []);

  const milDomain = domain === 'mil';
  const domainText = `.${domain}`;

  // header text
  const anOfficialSiteText =
    'An official website of the United States government';
  const heresHowYouKnowText = "Here's how you know";

  // left content
  const leftHeading = `Official websites use ${domainText}`;

  const leftText = (
    <>
      A <strong>{domainText}</strong> website belongs to an official{' '}
      {milDomain
        ? 'U.S. Department of Defense organization'
        : 'government organization in the United States'}
    </>
  );

  const leftContent = (
    <>
      <strong>{leftHeading}</strong>
      <br /> {leftText}.
    </>
  );

  // right content
  const rightHeading = `Secure ${domainText} websites use HTTPS`;

  const lockIcon = (
    <span className="icon-lock">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="64"
        viewBox="0 0 52 64"
        className="usa-banner__lock-image"
        role="img"
        aria-labelledby="banner-lock-description"
        focusable="false"
      >
        <title id="banner-lock-title">Lock</title>
        <desc id="banner-lock-description">Locked padlock</desc>
        <path
          fill="#000000"
          fillRule="evenodd"
          d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
        />
      </svg>
    </span>
  );

  const rightText = (
    <>
      A <strong>lock</strong> ({lockIcon}) or <strong>https://</strong> means
      you’ve safely connected to the {domainText} website. Share sensitive
      information only on official, secure websites.
    </>
  );

  const rightContent = (
    <>
      <strong>{rightHeading}</strong>
      <br />
      {rightText}
    </>
  );

  return (
    <div
      className={createClassString(['bah-uswds-banner', className])}
      ref={containerRef}
    >
      <section
        className="usa-banner"
        aria-label="Official website of the United States government"
      >
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <GridCol width="auto">
                <img
                  className="usa-banner__header-flag"
                  src={imgFlag}
                  alt="U.S. flag"
                  aria-hidden="true"
                />
              </GridCol>

              <GridCol width="fill" tablet="auto" aria-hidden="true">
                <p className="usa-banner__header-text">{anOfficialSiteText}</p>
                <p className="usa-banner__header-action" aria-hidden="true">
                  {heresHowYouKnowText}
                </p>
              </GridCol>

              <button
                aria-controls="gov-banner"
                aria-expanded="false"
                className="usa-accordion__button usa-banner__button"
                type="button"
              >
                <span className="usa-banner__button-text">
                  {heresHowYouKnowText}
                </span>
              </button>
            </div>
          </header>

          <div
            className="usa-banner__content usa-accordion__content"
            id="gov-banner"
            hidden
          >
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src={imgDotGov}
                  role="img"
                  alt="Dot gov"
                />

                <div className="usa-media-block__body">
                  <p>{leftContent}</p>
                </div>
              </div>

              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src={imgHttps}
                  role="img"
                  alt="Https"
                />

                <div className="usa-media-block__body">
                  <p>{rightContent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

USGovernmentBanner.propTypes = {
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Top-level domain (TLD) */
  domain: PropTypes.oneOf(['gov', 'mil'])
};

USGovernmentBanner.defaultProps = {
  domain: 'gov'
};
