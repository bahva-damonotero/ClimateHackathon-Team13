import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Alert({
  children,
  className,
  fadeOut,
  heading,
  icon,
  onClose,
  role,
  slim,
  type,
  ...props
}) {
  const [alertHeadingId] = useState(uuid());
  const [alertBodyId] = useState(uuid());

  const containerRef = useRef();

  useEffect(() => {
    if (!fadeOut || !containerRef || !containerRef.current) return;

    containerRef.current.addEventListener('animationend', () => {
      onClose();
    });
  }, [fadeOut, containerRef]);

  const bodyNode =
    typeof children === 'string' ? (
      <p id={alertBodyId} className="usa-alert__text">
        {children}
      </p>
    ) : (
      <div id={alertBodyId} className="usa-alert__text">
        {children}
      </div>
    );

  const alertRole = !role && type === 'error' ? 'alert' : role;

  return (
    <div
      className={createClassString([
        'usa-alert',
        type ? `usa-alert--${type}` : '',
        !icon ? 'usa-alert--no-icon' : '',
        slim ? 'usa-alert--slim' : '',
        fadeOut ? 'usa-alert--fade-out' : '',
        className
      ])}
      ref={containerRef}
      {...props}
    >
      <div
        className="usa-alert__body"
        role={alertRole}
        aria-describedby={alertBodyId}
        aria-labelledby={heading ? alertHeadingId : undefined}
      >
        {heading && (
          <h3 id={alertHeadingId} className="usa-alert__heading">
            {heading}
          </h3>
        )}
        {bodyNode}
      </div>

      {onClose && (
        <div className="bah-uswds-alert__right">
          <button
            className="bah-uswds-alert__close-button"
            onClick={onClose}
            type="button"
          >
            <div aria-hidden>&times;</div>
            <span className="usa-sr-only">Close Alert</span>
          </button>
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  /** Body content of the alert */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Automatically set by the AlertService to make toast alerts fade out */
  fadeOut: PropTypes.bool,
  /** Heading content of the alert */
  heading: PropTypes.node,
  /** Should the icon be shown or not? */
  icon: PropTypes.bool,
  /**
   * Function called when the alert's close button is clicked.
   * The close button is hidden if this is not provided.
   */
  onClose: PropTypes.func,
  /**
   * ARIA role to apply to the alert. Use this for `error` or `warning` type alerts.
   * See also:
   * [alert](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role) and
   * [alertdialog](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role).
   */
  role: PropTypes.oneOf(['alert', 'alertdialog']),
  /** If `true`, the slim alert variant is used */
  slim: PropTypes.bool,
  /** Determines the icon and colors of the alert */
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning'])
};

Alert.defaultProps = {
  fadeOut: false,
  icon: true,
  slim: false
};
