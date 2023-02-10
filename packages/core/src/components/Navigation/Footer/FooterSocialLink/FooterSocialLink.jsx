import React from 'react';
import PropTypes from 'prop-types';

import facebookIcon from '@uswds/uswds/img/usa-icons/facebook.svg';
import instagramIcon from '@uswds/uswds/img/usa-icons/instagram.svg';
import linkedinIcon from '@uswds/uswds/img/usa-icons/linkedin.svg';
import rssIcon from '@uswds/uswds/img/usa-icons/rss_feed.svg';
import twitterIcon from '@uswds/uswds/img/usa-icons/twitter.svg';
import youtubeIcon from '@uswds/uswds/img/usa-icons/youtube.svg';

import { GridCol } from '../../..';

const socialIcons = [
  { id: 'facebook', src: facebookIcon, alt: 'Facebook' },
  { id: 'instagram', src: instagramIcon, alt: 'Instagram' },
  { id: 'linkedin', src: linkedinIcon, alt: 'LinkedIn' },
  { id: 'rss', src: rssIcon, alt: 'RSS' },
  { id: 'twitter', src: twitterIcon, alt: 'Twitter' },
  { id: 'youtube', src: youtubeIcon, alt: 'YouTube' }
];

export default function FooterSocialLink({ type, url }) {
  const selectedIcon = socialIcons.find((icon) => icon.id === type);

  return (
    <GridCol width="auto">
      <a className="usa-social-link" href={url}>
        <img
          src={selectedIcon.src}
          alt={selectedIcon.alt}
          className="usa-social-link__icon"
        />
      </a>
    </GridCol>
  );
}

FooterSocialLink.propTypes = {
  /** Type of social media page being linked to */
  type: PropTypes.oneOf([
    'facebook',
    'instagram',
    'linkedin',
    'rss',
    'twitter',
    'youtube'
  ]).isRequired,
  /** URL of the social media page */
  url: PropTypes.string.isRequired
};
