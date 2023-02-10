import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';
import { Alert } from '..';

export default function SiteAlert({
  children,
  className,
  emergency,
  heading,
  icon,
  onClose,
  slim
}) {
  return (
    <section
      className={createClassString([
        'usa-site-alert',
        emergency ? 'usa-site-alert--emergency' : 'usa-site-alert--info',
        !heading && !slim ? 'usa-site-alert--no-heading' : '',
        !icon ? 'usa-site-alert--no-icon' : '',
        slim ? 'usa-site-alert--slim' : '',
        className
      ])}
      aria-label="Site alert"
    >
      <Alert heading={heading} onClose={onClose}>
        {children}
      </Alert>
    </section>
  );
}

SiteAlert.propTypes = {
  /** Body content of the alert */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** If `true`, the emergency alert variant is used */
  emergency: PropTypes.bool,
  /** Heading content of the alert */
  heading: PropTypes.node,
  /** Should the icon be shown or not? */
  icon: PropTypes.bool,
  /**
   * Function called when the alert's close button is clicked.
   * The close button is hidden if this is not provided.
   */
  onClose: PropTypes.func,
  /** If `true`, the slim alert variant is used */
  slim: PropTypes.bool
};

SiteAlert.defaultProps = {
  emergency: false,
  icon: true,
  slim: false
};
