import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function CardMedia({
  aspectRatio,
  children,
  exdent,
  inset,
  src
}) {
  return (
    <div
      className={createClassString([
        'usa-card__media',
        aspectRatio
          ? `usa-card__media--fix-aspect add-aspect-${aspectRatio}`
          : '',
        exdent ? 'usa-card__media--exdent' : '',
        inset ? 'usa-card__media--inset' : ''
      ])}
    >
      <div className="usa-card__img">
        <img src={src} alt={children} />
      </div>
    </div>
  );
}

CardMedia.propTypes = {
  /** Sets a fixed aspect ratio for the media */
  aspectRatio: PropTypes.oneOf(['1x1', '2x1', '4x3', '9x16', '16x9']),
  /** Media alternate text/description */
  children: PropTypes.string.isRequired,
  /** Should the image be exdent? */
  exdent: PropTypes.bool,
  /** Should the image be inset? */
  inset: PropTypes.bool,
  /** URL or path for the image */
  src: PropTypes.string.isRequired
};

CardMedia.defaultProps = {
  exdent: false,
  inset: false
};
