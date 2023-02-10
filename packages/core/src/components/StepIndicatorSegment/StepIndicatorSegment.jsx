import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function StepIndicatorSegment({ children, complete, current }) {
  return (
    <li
      aria-current={current}
      className={createClassString([
        'usa-step-indicator__segment',
        complete ? 'usa-step-indicator__segment--complete' : '',
        current ? 'usa-step-indicator__segment--current' : ''
      ])}
    >
      <span className="usa-step-indicator__segment-label">
        {children}

        {!current ? (
          <span className="usa-sr-only">
            {complete ? 'completed' : 'not completed'}
          </span>
        ) : (
          <></>
        )}
      </span>
    </li>
  );
}

StepIndicatorSegment.propTypes = {
  /** Label for the step */
  children: PropTypes.node.isRequired,
  /** Is the step completed? */
  complete: PropTypes.bool,
  /** Is this the current step? */
  current: PropTypes.bool
};

StepIndicatorSegment.defaultProps = {
  complete: false,
  current: false
};
