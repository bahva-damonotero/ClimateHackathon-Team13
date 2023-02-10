import React from 'react';
import PropTypes from 'prop-types';

import { Fieldset, FormError, Label, Legend } from '..';
import { Hint } from '../..';

export default function DateInput({
  children,
  disabled,
  error,
  hint,
  id,
  onChange,
  readOnly,
  value
}) {
  const hintId = `${id}--hint`;
  const monthId = `${id}--month`;
  const dayId = `${id}--day`;
  const yearId = `${id}--year`;

  const usedValue = {
    month: (value && value.month) || '',
    day: (value && value.day) || '',
    year: (value && value.year) || ''
  };

  return (
    <Fieldset>
      <Legend error={error}>{children}</Legend>

      {hint && <Hint id={hintId}>{hint}</Hint>}

      <FormError error={error} />

      <div className="usa-memorable-date">
        <div className="usa-form-group usa-form-group--month">
          <Label error={error} target={monthId}>
            Month
          </Label>

          <input
            aria-describedby={hint ? hintId : undefined}
            className="usa-input usa-input--inline"
            disabled={disabled}
            id={monthId}
            inputMode="numeric"
            maxLength="2"
            name={monthId}
            onChange={
              onChange
                ? (event) => onChange({ month: event.target.value })
                : undefined
            }
            pattern="[0-9]*"
            readOnly={readOnly}
            type="text"
            value={usedValue.month}
          />
        </div>

        <div className="usa-form-group usa-form-group--day">
          <Label error={error} target={dayId}>
            Day
          </Label>

          <input
            aria-describedby={hintId}
            className="usa-input usa-input--inline"
            disabled={disabled}
            id={dayId}
            inputMode="numeric"
            maxLength="2"
            name={dayId}
            onChange={
              onChange
                ? (event) => onChange({ day: event.target.value })
                : undefined
            }
            pattern="[0-9]*"
            readOnly={readOnly}
            type="text"
            value={usedValue.day}
          />
        </div>

        <div className="usa-form-group usa-form-group--year">
          <Label error={error} target={yearId}>
            Year
          </Label>

          <input
            aria-describedby={hintId}
            className="usa-input usa-input--inline"
            disabled={disabled}
            id={yearId}
            inputMode="numeric"
            minLength="4"
            maxLength="4"
            name={yearId}
            onChange={
              onChange
                ? (event) => onChange({ year: event.target.value })
                : undefined
            }
            pattern="[0-9]*"
            readOnly={readOnly}
            type="text"
            value={usedValue.year}
          />
        </div>
      </div>
    </Fieldset>
  );
}

DateInput.propTypes = {
  /** Label for input */
  children: PropTypes.node.isRequired,
  /** Should the inputs be marked as disabled? */
  disabled: PropTypes.bool,
  /** Error message to display */
  error: PropTypes.string,
  /** Hint to be shown for the date input */
  hint: PropTypes.node,
  /** ID of the input */
  id: PropTypes.string.isRequired,
  /**
   * Function called when one of the inputs
   * is modified
   */
  onChange: PropTypes.func,
  /** Should the inputs be marked as read-only? */
  readOnly: PropTypes.bool,
  /** Used to set the values of the inputs */
  value: PropTypes.shape({
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number
  })
};

DateInput.defaultProps = {
  disabled: false,
  readOnly: false
};
