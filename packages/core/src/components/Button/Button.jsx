import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import modal from '@uswds/uswds/js/usa-modal';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

import { Link } from '..';

const Button = forwardRef(
  (
    {
      accentCool,
      base,
      big,
      children,
      className,
      disabled,
      href,
      inverse,
      onClick,
      outline,
      secondary,
      unstyled,
      ...props
    },
    ref
  ) => {
    const classes = createClassString([
      'usa-button',
      accentCool ? 'usa-button--accent-cool' : '',
      base ? 'usa-button--base' : '',
      big ? 'usa-button--big' : '',
      inverse ? 'usa-button--inverse' : '',
      outline ? 'usa-button--outline' : '',
      secondary ? 'usa-button--secondary' : '',
      unstyled ? 'usa-button--unstyled' : '',
      className
    ]);
    return href ? (
      <Link
        className={classes}
        href={href}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    ) : (
      <button
        className={classes}
        disabled={disabled}
        onClick={(e) => {
          if (onClick) onClick(e);

          // eslint-disable-next-line react/prop-types
          if (props['data-close-modal'] || props['data-open-modal']) {
            modal.toggleModal.bind(e.target)(e);
            e.stopPropagation();
          }
        }}
        type="button"
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;

Button.propTypes = {
  /** If `true`, use the "accent cool" color scheme */
  accentCool: PropTypes.bool,
  /** If `true`, use the "base" color scheme */
  base: PropTypes.bool,
  /** If `true`, the size of the button is almost doubled */
  big: PropTypes.bool,
  /** Body content of the button */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Should the button be disabled? */
  disabled: PropTypes.bool,
  /** If a value for this prop is provided, the button will use an anchor tag instead of a button tag */
  href: PropTypes.string,
  /**
   * If `true`, use the "inverse" color scheme.
   * The `outline` prop must be `true` for this to have an effect.
   * This is best used with dark backgrounds.
   */
  inverse: PropTypes.bool,
  /** Function called when the button is clicked */
  onClick: PropTypes.func,
  /** If `true`, the outline variant of the button is used */
  outline: PropTypes.bool,
  /** If `true`, use the "secondary" color scheme */
  secondary: PropTypes.bool,
  /** If `true`, the button is styled to look like a link */
  unstyled: PropTypes.bool
};

Button.defaultProps = {
  accentCool: false,
  base: false,
  big: false,
  disabled: false,
  inverse: false,
  outline: false,
  secondary: false,
  unstyled: false
};
