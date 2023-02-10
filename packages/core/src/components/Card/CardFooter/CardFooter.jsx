import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function CardFooter({ children, exdent }) {
  return (
    <div
      className={createClassString([
        'usa-card__footer',
        exdent ? 'usa-card__footer--exdent' : ''
      ])}
    >
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  /** Should the footer be exdent? */
  exdent: PropTypes.bool
};

CardFooter.defaultProps = {
  exdent: false
};
