import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import comboBox from '@uswds/uswds/js/usa-combo-box';

import { FormError, Label } from '..';

export default function ComboBox({
  children,
  comparator,
  disabled,
  error,
  filter,
  id,
  onChange,
  options,
  optionRenderer,
  placeholder,
  value,
  ...props
}) {
  const containerRef = useRef();
  const comboBoxRef = useRef();
  const selectRef = useRef();
  const valueRef = useRef(value);

  const pristineClass = 'usa-combo-box--pristine';

  const selectionIndex = (newValue) => {
    const index = options.findIndex((option) =>
      comparator ? comparator(option, newValue) : isEqual(option, newValue)
    );

    return index >= 0 ? index : undefined;
  };

  // initialization
  useEffect(() => {
    const containerEl = containerRef.current;
    const selectEl = selectRef.current;
    if (!containerEl || !selectEl) return;

    // call USWDS's `on` function to initialize the component
    comboBox.on(containerEl);

    // hook into the select's `change` event to monitor changes
    selectEl.addEventListener('change', (e) => {
      if (!onChange) return;

      // do not trigger onChange if the value did not change
      if (
        selectionIndex(valueRef.current) === Number.parseInt(e.detail.value, 10)
      ) {
        return;
      }

      const newValue = options[e.detail.value];
      valueRef.current = newValue;

      const event = new CustomEvent('change', {
        detail: {
          name: id,
          value: newValue
        }
      });
      onChange(event);
    });

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      comboBox.off(containerEl);
    };
  }, []);

  // update the combo box's value whenever the value changes outside
  // of this component
  useEffect(() => {
    const comboBoxEl = comboBoxRef.current;
    const selectEl = selectRef.current;
    if (!comboBoxEl || !selectRef) return;

    const inputEl = comboBoxEl.querySelector('input');

    valueRef.current = value;
    const optionIndex = selectionIndex(value);
    let valueText = '';

    if (optionIndex !== undefined) {
      const valueOption = selectEl.querySelector(
        `option[value="${optionIndex}"]`
      );
      valueText = valueOption.innerHTML;
    }

    if (valueText !== inputEl.value) {
      inputEl.value = valueText;

      if (value) {
        selectEl.value = optionIndex;
        comboBoxEl.classList.add(pristineClass);
      } else {
        // clear the combo box
        selectEl.value = '';
        comboBoxEl.classList.remove(pristineClass);
      }
    }
  }, [value, comboBoxRef, selectRef]);

  // call USWDS's `enable` or `disable` function when the disabled prop changes
  useEffect(() => {
    const comboBoxEl = comboBoxRef.current;
    if (!comboBoxEl) return;

    const disabledState = comboBoxEl.querySelector(`#${id}`).disabled;
    if (disabled === disabledState) return; // the input already has the right disabled state

    if (disabled) comboBox.disable(comboBoxEl);
    else comboBox.enable(comboBoxEl);
  }, [disabled]);

  return (
    <div className="bah-uswds-combo-box" ref={containerRef}>
      <Label error={error} target={id}>
        {children}
      </Label>

      <FormError error={error} />

      <div
        className="usa-combo-box"
        data-default-value={selectionIndex(value)}
        data-filter={filter}
        data-placeholder={placeholder}
        ref={comboBoxRef}
      >
        <select
          className="usa-select usa-combo-box__select"
          disabled={disabled}
          id={id}
          name={id}
          ref={selectRef}
          {...props}
        >
          {options.map((option, index) => (
            <option key={`${id}--${index}`} value={index}>
              {optionRenderer ? optionRenderer(option) : option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

ComboBox.propTypes = {
  /** Label for input */
  children: PropTypes.node.isRequired,
  /**
   * Let's you specify a custom function for comparing the selected value with the list of options.
   * If this is not provided, lodash's isEqual function is used: https://lodash.com/docs/#isEqual.
   */
  comparator: PropTypes.func,
  /** Should the combo box be disabled? */
  disabled: PropTypes.bool,
  /** Error message to display */
  error: PropTypes.string,
  /**
   * The combo box will use this regular expression to filter the combo box options.
   * You are declaring a case insensitive match over the entire option text, which
   * means ^ and $ are added automatically. You can specify the inputted query with {{query}}.
   */
  filter: PropTypes.string,
  /** ID of the input */
  id: PropTypes.string.isRequired,
  /** Function called whenever the combo box selection is changed */
  onChange: PropTypes.func,
  /** Specifies how the options should be displayed in the combo box */
  optionRenderer: PropTypes.func,
  /** Array of combo box options */
  options: PropTypes.array.isRequired,
  /** Text to show when a value has not been selected */
  placeholder: PropTypes.string,
  /** Used to set the combo box selection */
  value: PropTypes.any
};

ComboBox.defaultProps = {
  disabled: false
};
