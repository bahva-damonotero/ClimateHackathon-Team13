import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function CardBody({ children, exdent }) {
  return (
    <div
      className={createClassString([
        'usa-card__body',
        exdent ? 'usa-card__body--exdent' : ''
      ])}
    >
      {children}
    </div>
  );
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  /** Should the body be exdent? */
  exdent: PropTypes.bool
};

CardBody.defaultProps = {
  exdent: false
};
