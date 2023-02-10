import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Checkbox({
  checked,
  children,
  disabled,
  groupIndex,
  id,
  onChange,
  readOnly,
  tile,
  ...props
}) {
  const checkboxId = groupIndex !== undefined ? `${id}--${groupIndex}` : id;

  return (
    <div className="usa-checkbox">
      <input
        checked={checked}
        className={createClassString([
          'usa-checkbox__input',
          tile ? 'usa-checkbox__input--tile' : ''
        ])}
        disabled={disabled}
        id={checkboxId}
        name={id}
        onChange={onChange || undefined}
        readOnly={readOnly}
        type="checkbox"
        {...props}
      />
      <label className="usa-checkbox__label" htmlFor={checkboxId}>
        {children}
      </label>
    </div>
  );
}

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  /** State of the checkbox */
  checked: PropTypes.bool,
  /** Label for the checkbox */
  children: PropTypes.node.isRequired,
  /** Should the checkbox be disabled? */
  disabled: PropTypes.bool,
  /** Index of the checkbox in the `<CheckboxGroup>` (auto-populated) */
  groupIndex: PropTypes.number,
  /** ID for the checkbox (auto-populated if used inside a `<CheckboxGroup>`) */
  id: PropTypes.string,
  /** Function called when the checkbox is checked or unchecked */
  onChange: PropTypes.func,
  /** Should the checkbox be marked as read-only? */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the tile checkbox variant is used.
   * This is automatically set when used inside a `<CheckboxGroup>`.
   */
  tile: PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  readOnly: false,
  tile: false
};
