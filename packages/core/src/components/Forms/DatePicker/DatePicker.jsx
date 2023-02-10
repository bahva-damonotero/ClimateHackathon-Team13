import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import datePicker from '@uswds/uswds/js/usa-date-picker';

import { FormError, Label } from '..';
import { Hint } from '../..';

export default function DatePicker({
  children,
  disabled,
  error,
  hint,
  id,
  maxDate,
  minDate,
  onChange,
  rangeDate,
  value,
  ...props
}) {
  const labelId = `${id}-label`;
  const hintId = `${id}-hint`;

  const containerRef = useRef();
  const datePickerRef = useRef();
  const inputRef = useRef();

  const [ready, setReady] = useState(false);

  // initialization
  useEffect(() => {
    const containerEl = containerRef.current;
    const inputEl = inputRef.current;
    if (!containerEl || !inputEl) return;

    // call USWDS's `on` function to initialize the component
    datePicker.on(containerEl);
    setReady(true);

    // hook into the input's `change` event to monitor changes
    inputEl.addEventListener('change', (e) => {
      if (onChange) onChange(e);
    });

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      datePicker.off(containerEl);
    };
  }, []);

  // call USWDS's `setCalendarValue` when the value changes
  // outside of this component
  useEffect(() => {
    const hiddenInputEl = inputRef.current;
    const datePickerEl = datePickerRef.current;
    if (!hiddenInputEl || !datePickerEl) return;

    if (value !== hiddenInputEl.value) {
      if (!value) {
        // reset the date picker
        const shownInputEl = datePickerEl.querySelector(
          '.usa-date-picker__external-input'
        );
        shownInputEl.value = '';
        hiddenInputEl.value = '';
      } else {
        datePicker.setCalendarValue(datePickerEl, value);
      }
    }
  }, [value, inputRef, datePickerRef]);

  // call USWDS's `enable` or `disable` function when the disabled prop changes
  useEffect(() => {
    const datePickerEl = datePickerRef.current;
    if (!datePickerEl) return;

    const disabledState = datePickerEl.querySelector(`#${id}`).disabled;
    if (disabled === disabledState) return; // the input already has the right disabled state

    if (disabled) datePicker.disable(datePickerEl);
    else datePicker.enable(datePickerEl);
  }, [disabled]);

  return (
    <div
      className="bah-uswds-date-picker"
      style={{ display: ready ? 'block' : 'none' }}
      ref={containerRef}
    >
      <Label error={error} id={labelId} target={id}>
        {children}
      </Label>

      <FormError error={error} />

      <Hint id={hintId}>{hint}</Hint>

      <div
        className="usa-date-picker"
        data-default-value={value}
        data-max-date={maxDate}
        data-min-date={minDate}
        data-range-date={rangeDate}
        ref={datePickerRef}
      >
        <input
          aria-describedby={hintId}
          aria-labelledby={labelId}
          className="usa-input"
          disabled={disabled}
          id={id}
          name={id}
          ref={inputRef}
          type="text"
          {...props}
        />
      </div>
    </div>
  );
}

DatePicker.propTypes = {
  /** Label for input */
  children: PropTypes.node.isRequired,
  /** Should the date picker be disabled? */
  disabled: PropTypes.bool,
  /** Error message to display */
  error: PropTypes.string,
  /** Hint to be shown for the date picker */
  hint: PropTypes.node,
  /** ID of the input */
  id: PropTypes.string.isRequired,
  /** The date picker will not allow a date selection after this date. Must be in the format: `YYYY-MM-DD` */
  maxDate: PropTypes.string,
  /** The date picker will not allow a date selection before this date. Must be in the format: `YYYY-MM-DD` */
  minDate: PropTypes.string,
  /** Function called when the date is changed */
  onChange: PropTypes.func,
  /** When set, the date picker will show a range selection from the range date. Must be in the format: `YYYY-MM-DD` */
  rangeDate: PropTypes.string,
  /** Used to set the value of the input. Must be in the format: `YYYY-MM-DD` */
  value: PropTypes.string
};

DatePicker.defaultProps = {
  disabled: false,
  hint: 'mm/dd/yyyy'
};
