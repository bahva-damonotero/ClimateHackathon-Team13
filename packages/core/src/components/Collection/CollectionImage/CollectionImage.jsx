import React from 'react';
import PropTypes from 'prop-types';

export default function CollectionImage({ alt, src }) {
  return <img className="usa-collection__img" src={src} alt={alt} />;
}

CollectionImage.propTypes = {
  /** Screen reader text (or alt text) for the media thumbnail */
  alt: PropTypes.string.isRequired,
  /** URL or path of the media thumnbnail */
  src: PropTypes.string.isRequired
};
