import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

import { flattenChildren } from '@boozallen-uip/uswds-react-utils';

import { Fieldset, FormError } from '..';

export default function RadioGroup({
  children,
  comparator,
  disabled,
  error,
  id,
  onChange,
  readOnly,
  tile,
  value
}) {
  let label;
  const options = [];

  flattenChildren(React.Children.toArray(children)).forEach((child) => {
    const componentType = child.type.displayName;

    switch (componentType) {
      case 'Legend':
        label = child;
        break;

      case 'Radio':
        options.push(child);
        break;

      default:
        throw new Error(
          `Invalid child component '${componentType}' used in RadioGroup.`
        );
    }
  });

  if (!label) {
    throw new Error('A Legend is required inside of a RadioGroup.');
  }

  if (!options.length) {
    throw new Error(
      'At least one Radio must be present inside of a RadioGroup.'
    );
  }

  return (
    <Fieldset>
      {React.cloneElement(label, { error })}

      <FormError error={error} />

      {options.map((child, index) => {
        const optionValue = child.props.value
          ? child.props.value
          : child.props.children;

        const checked = (() => {
          if (comparator) {
            return comparator(value, optionValue);
          }
          if (['function', 'object'].includes(typeof optionValue)) {
            return isEqual(value, optionValue);
          }
          return value === optionValue;
        })();

        const onChangeHandler = onChange
          ? (newValue) => {
              const event = new CustomEvent('change', {
                detail: {
                  name: id,
                  value: newValue
                }
              });
              onChange(event);
            }
          : undefined;

        return React.cloneElement(child, {
          checked,
          disabled: disabled || child.props.disabled,
          groupId: id,
          groupIndex: index,
          onChange: onChangeHandler,
          readOnly,
          tile
        });
      })}
    </Fieldset>
  );
}

RadioGroup.propTypes = {
  /** `<Legend>` + `<Radio>` node(s) */
  children: PropTypes.node.isRequired,
  /**
   * Let's you specify a custom function for comparing the selected value with the list of options.
   * If this is not provided, lodash's isEqual function is used: https://lodash.com/docs/#isEqual.
   */
  comparator: PropTypes.func,
  /** Should all the radio options be disabled? */
  disabled: PropTypes.bool,
  /** Error message to display */
  error: PropTypes.string,
  /** ID for the group of radio options */
  id: PropTypes.string.isRequired,
  /** Function called whenever the radio selection is changed */
  onChange: PropTypes.func,
  /** Should the radio options be marked as read-only? */
  readOnly: PropTypes.bool,
  /** If `true`, the tile radio variant is used for the entire group */
  tile: PropTypes.bool,
  /** Used to set the radio selection */
  value: PropTypes.any
};

RadioGroup.defaultProps = {
  disabled: false,
  readOnly: false,
  tile: false
};
