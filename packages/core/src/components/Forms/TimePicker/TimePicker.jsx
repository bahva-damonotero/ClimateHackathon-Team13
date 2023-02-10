import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import timePicker from '@uswds/uswds/js/usa-time-picker';
import comboBox from '@uswds/uswds/js/usa-combo-box';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

import { FormError, Label } from '..';
import { Hint } from '../..';

export default function TimePicker({
  children,
  className,
  disabled,
  error,
  hint,
  id,
  maxTime,
  minTime,
  onChange,
  placeholder,
  step,
  use24Hour,
  value
}) {
  const containerRef = useRef();
  const timePickerRef = useRef();

  // initialization
  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` functions to initialize the component
    timePicker.on(containerEl);
    comboBox.on(containerEl);

    // hook into the select's `change` event to monitor changes
    const selectEl = containerEl.querySelector('select');
    selectEl.addEventListener('change', (e) => {
      if (onChange) onChange(e);
    });

    // 24hr format
    if (use24Hour) {
      const options = containerEl.querySelectorAll('option');
      for (const option of options) {
        option.innerHTML = option.value;
      }
    }

    // on dismount, call USWDS's `off` functions to cleanup the component
    return () => {
      comboBox.off(containerEl);
      timePicker.off(containerEl);
    };
  }, []);

  // update the time picker's value whenever the value changes outside
  // of this component
  useEffect(() => {
    const timePickerEl = timePickerRef.current;
    if (!timePickerEl) return;

    const selectEl = timePickerEl.querySelector('select');
    const inputEl = timePickerEl.querySelector(`#${id}`);

    if (value !== selectEl.value) {
      selectEl.value = value;

      const valueOption = selectEl.querySelector(`option[value="${value}"]`);
      if (valueOption) {
        inputEl.value = valueOption.innerHTML;
      }
    }
  }, [value]);

  // call USWDS's `enable` or `disable` function when the disabled prop changes
  useEffect(() => {
    const timePickerEl = timePickerRef.current;
    if (!timePickerEl) return;

    const disabledState = timePickerEl.querySelector(`#${id}`).disabled;
    if (disabled === disabledState) return; // the input already has the right disabled state

    if (disabled) comboBox.disable(timePickerEl);
    else comboBox.enable(timePickerEl);
  }, [disabled]);

  const labelId = `${id}--label`;
  const hintId = `${id}--hint`;

  return (
    <div
      className={createClassString(['bah-uswds-time-picker', className])}
      ref={containerRef}
    >
      <Label id={labelId} target={id}>
        {children}
      </Label>

      {hint && <Hint id={hintId}>{hint}</Hint>}

      <FormError error={error} />

      <div
        className="usa-time-picker"
        data-default-value={value}
        data-max-time={maxTime}
        data-min-time={minTime}
        data-placeholder={placeholder}
        data-step={step}
        ref={timePickerRef}
      >
        <input
          aria-describedby={createClassString([labelId, hint ? hintId : null])}
          className="usa-input"
          disabled={disabled}
          id={id}
          name={id}
          type="text"
        />
      </div>
    </div>
  );
}

TimePicker.propTypes = {
  /** Label for input */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Should the time picker be disabled? */
  disabled: PropTypes.bool,
  /** Error message to display */
  error: PropTypes.string,
  /** Hint to be shown for the time picker */
  hint: PropTypes.node,
  /** ID of the input */
  id: PropTypes.string.isRequired,
  /** The end time used in the time picker in `hh:mm` 24-hour format. The default is `23:59` */
  maxTime: PropTypes.string,
  /** The start time used in the time picker in `hh:mm` 24-hour format. The default is `00:00` */
  minTime: PropTypes.string,
  /** Function called whenever the time picker value is changed */
  onChange: PropTypes.func,
  /** Text to show when a value has not been selected */
  placeholder: PropTypes.string,
  /**
   * The number of minutes between options.
   * The minimum is 1 minute and the default is 30 minutes.
   */
  step: PropTypes.number,
  /** If `true`, the 24-hour time format is used */
  use24Hour: PropTypes.bool,
  /** Used to set the value of the input. Must be in `hh:mm` 24-hour format */
  value: PropTypes.string
};

TimePicker.defaultProps = {
  disabled: false,
  use24Hour: false
};
