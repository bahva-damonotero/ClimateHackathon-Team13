import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

import { FormError, Label } from '..';

export default function Dropdown({
  children,
  comparator,
  error,
  id,
  onChange,
  optionRenderer,
  options,
  showSelectOption,
  value,
  ...props
}) {
  function selectionIndex() {
    const index = options.findIndex((option) => {
      if (comparator) return comparator(option, value);

      if (typeof value === 'object') return isEqual(option, value);

      return option === value;
    });

    return index >= 0 ? index : undefined;
  }

  return (
    <>
      <Label error={error} target={id}>
        {children}
      </Label>

      <FormError error={error} />

      {/* eslint-disable jsx-a11y/no-onchange */}
      <select
        className="usa-select"
        id={id}
        name={id}
        onChange={
          onChange
            ? (e) => {
                const event = new CustomEvent('change', {
                  detail: {
                    name: id,
                    value: options[e.target.value]
                  }
                });
                onChange(event);
              }
            : undefined
        }
        value={selectionIndex()}
        {...props}
      >
        {showSelectOption && <option value="">- Select -</option>}

        {options.map((option, index) => (
          <option key={`${id}--${index}`} value={index}>
            {optionRenderer ? optionRenderer(option) : option}
          </option>
        ))}
      </select>
      {/* eslint-enable jsx-a11y/no-onchange */}
    </>
  );
}

Dropdown.propTypes = {
  /** Label for input */
  children: PropTypes.node.isRequired,
  /**
   * Let's you specify a custom function for comparing the selected value with the list of options.
   * If this is not provided, lodash's isEqual function is used: https://lodash.com/docs/#isEqual.
   */
  comparator: PropTypes.func,
  /** Error message to display */
  error: PropTypes.string,
  /** ID of the input */
  id: PropTypes.string.isRequired,
  /** Function called whenever the dropdown selection is changed */
  onChange: PropTypes.func,
  /** Function that when given an option should return how the option should be displayed in the dropdown menu */
  optionRenderer: PropTypes.func,
  /** Array of dropdown options */
  options: PropTypes.array.isRequired,
  /** Should the "- Select -" option be shown? */
  showSelectOption: PropTypes.bool,
  /** Used to set the dropdown selection */
  value: PropTypes.any
};

Dropdown.defaultProps = {
  showSelectOption: true
};
