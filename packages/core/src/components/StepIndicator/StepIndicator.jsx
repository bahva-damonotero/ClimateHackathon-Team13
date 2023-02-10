import React from 'react';
import PropTypes from 'prop-types';

import {
  createClassString,
  flattenChildren
} from '@boozallen-uip/uswds-react-utils';

export default function StepIndicator({
  centered,
  children,
  counters,
  current,
  labels
}) {
  const originalSteps = flattenChildren(React.Children.toArray(children));
  const totalSteps = originalSteps.length;
  const heading = originalSteps[current - 1].props.children;

  return (
    <div
      className={createClassString([
        'usa-step-indicator',
        centered ? 'usa-step-indicator--center' : '',
        !labels ? 'usa-step-indicator--no-labels' : '',
        counters
          ? `usa-step-indicator--counters${counters === 'small' ? '-sm' : ''}`
          : ''
      ])}
      aria-label="progress"
    >
      <ol className="usa-step-indicator__segments">
        {originalSteps.map((child, index) =>
          React.cloneElement(child, {
            complete: index + 1 < current,
            current: index + 1 === current
          })
        )}
      </ol>

      <div className="usa-step-indicator__header">
        <h2 className="usa-step-indicator__heading">
          <span className="usa-step-indicator__heading-counter">
            <span className="usa-sr-only">Step</span>
            <span className="usa-step-indicator__current-step">
              {current}
            </span>{' '}
            <span className="usa-step-indicator__total-steps">
              of {totalSteps}
            </span>
          </span>
          <span className="usa-step-indicator__heading-text">{heading}</span>
        </h2>
      </div>
    </div>
  );
}

StepIndicator.propTypes = {
  /** If `true`, the step labels are centered */
  centered: PropTypes.bool,
  /** `<StepIndicatorSegment />` nodes */
  children: PropTypes.node.isRequired,
  /** If `true` or `'small'` is passed in, a counters variant will be used */
  counters: PropTypes.oneOf([false, true, 'small']),
  /** The 1-based index of the current step */
  current: PropTypes.number.isRequired,
  /** If `false`, no labels will be visible under the steps */
  labels: PropTypes.bool
};

StepIndicator.defaultProps = {
  centered: false,
  counters: false,
  labels: true
};
