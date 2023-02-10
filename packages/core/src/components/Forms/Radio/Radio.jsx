import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Radio({
  checked,
  children,
  disabled,
  groupId,
  groupIndex,
  onChange,
  readOnly,
  tile,
  value,
  ...props
}) {
  const radioId = `${groupId}--${groupIndex}`;

  return (
    <div className="usa-radio">
      <input
        checked={checked}
        className={createClassString([
          'usa-radio__input',
          tile ? 'usa-radio__input--tile' : ''
        ])}
        disabled={disabled}
        id={radioId}
        name={groupId}
        onChange={
          onChange
            ? (e) => {
                if (e.target.checked) {
                  onChange(value || children);
                }
              }
            : undefined
        }
        readOnly={readOnly}
        type="radio"
        {...props}
      />
      <label className="usa-radio__label" htmlFor={radioId}>
        {children}
      </label>
    </div>
  );
}

Radio.displayName = 'Radio';

Radio.propTypes = {
  /** State of the radio option (auto-populated) */
  checked: PropTypes.bool,
  /** Label for the radio option */
  children: PropTypes.node.isRequired,
  /** Should the radio option be disabled? */
  disabled: PropTypes.bool,
  /** ID of the `<RadioGroup>` (auto-populated) */
  groupId: PropTypes.string,
  /** Index of the radio in the `<RadioGroup>` (auto-populated) */
  groupIndex: PropTypes.number,
  /** Function called when the radio option is selected */
  onChange: PropTypes.func,
  /** Should the radio option be marked as read-only? */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the tile radio variant is used.
   * This is automatically set when used inside a `<RadioGroup>`.
   */
  tile: PropTypes.bool,
  /** Value for the radio option */
  value: PropTypes.any
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  readOnly: false,
  tile: false
};
