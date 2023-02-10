import React from 'react';
import PropTypes from 'prop-types';

import { FormError, Label } from '..';

export default function Range({
  children,
  disabled,
  error,
  id,
  min,
  max,
  onChange,
  step,
  value,
  ...props
}) {
  return (
    <>
      <Label error={error} target={id}>
        {children}
      </Label>

      <FormError error={error} />

      <input
        id={id}
        className="usa-range"
        disabled={disabled}
        type="range"
        min={min}
        max={max}
        onChange={onChange}
        step={step}
        value={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        role="slider"
        {...props}
      />
    </>
  );
}

Range.propTypes = {
  /** Label for input */
  children: PropTypes.node.isRequired,
  /** Should the input be disabled? */
  disabled: PropTypes.bool,
  /** Error message to display */
  error: PropTypes.string,
  /** ID of the input */
  id: PropTypes.string.isRequired,
  /** Maximum value allowed */
  max: PropTypes.number.isRequired,
  /** Minimum value allowed */
  min: PropTypes.number.isRequired,
  /** Function called when the input is modified */
  onChange: PropTypes.func,
  /** Specifies the legal number intervals */
  step: PropTypes.number,
  /** Used to set the range value */
  value: PropTypes.number
};

Range.defaultProps = {
  disabled: false,
  step: 1
};
