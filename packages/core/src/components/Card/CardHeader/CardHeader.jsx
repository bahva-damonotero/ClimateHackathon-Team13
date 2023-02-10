import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function CardHeader({ children, exdent, level }) {
  const headingProps = { className: 'usa-card__heading' };

  function heading() {
    switch (level) {
      case 3:
        return <h3 {...headingProps}>{children}</h3>;

      case 4:
        return <h4 {...headingProps}>{children}</h4>;

      default:
        return <h2 {...headingProps}>{children}</h2>;
    }
  }
  return (
    <div
      className={createClassString([
        'usa-card__header',
        exdent ? 'usa-card__header--exdent' : ''
      ])}
    >
      {heading()}
    </div>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  /** Should the header be exdent? */
  exdent: PropTypes.bool,
  /** Heading level to use */
  level: PropTypes.oneOf([2, 3, 4])
};

CardHeader.defaultProps = {
  exdent: false,
  level: 2
};
