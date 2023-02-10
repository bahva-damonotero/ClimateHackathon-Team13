import React from 'react';
import PropTypes from 'prop-types';

import {
  createClassString,
  flattenChildren
} from '@boozallen-uip/uswds-react-utils';
import { FormError, Label } from '..';
import { validatorsToObject } from '../../util';

export default function Input({
  children,
  describedBy,
  error,
  id,
  inputWidth,
  onChange,
  value,
  success,
  type,
  validationId,
  validators,
  ...props
}) {
  const groupClasses = createClassString([
    error ? 'usa-input-group--error' : '',
    inputWidth ? `usa-input-group--${inputWidth}` : ''
  ]);
  const childComponents = flattenChildren(React.Children.toArray(children));
  const labelEls = [];
  let prefixComponent;
  let suffixComponent;

  for (const child of childComponents) {
    const componentType = child.type ? child.type.displayName : undefined;

    switch (componentType) {
      case 'InputPrefix':
        prefixComponent = child;
        break;

      case 'InputSuffix':
        suffixComponent = child;
        break;

      default:
        labelEls.push(child);
    }
  }

  const hasPrefixOrSuffix = prefixComponent || suffixComponent;

  const classes = createClassString([
    error ? 'usa-input--error' : '',
    success ? 'usa-input--success' : '',
    inputWidth && !hasPrefixOrSuffix ? `usa-input--${inputWidth}` : ''
  ]);

  const ariaDescribedBy =
    `${describedBy || ''} ${validationId || ''}`.trim() || undefined;

  const isTextArea = type === 'textarea';

  const inputEl = !isTextArea && (
    <input
      aria-describedby={ariaDescribedBy}
      className={createClassString(['usa-input', classes])}
      data-validation-element={validationId ? `#${validationId}` : undefined}
      id={id}
      name={id}
      onChange={onChange}
      type={type}
      value={value}
      {...(validators ? validatorsToObject(validators) : {})}
      {...props}
    />
  );

  return (
    <>
      <Label error={error} target={id}>
        {labelEls}
      </Label>

      <FormError error={error} />

      {isTextArea ? (
        <textarea
          aria-describedby={ariaDescribedBy}
          className={createClassString(['usa-textarea', classes])}
          id={id}
          name={id}
          onChange={onChange}
          value={value}
          {...props}
        />
      ) : (
        <>
          {hasPrefixOrSuffix ? (
            <div
              className={createClassString(['usa-input-group', groupClasses])}
            >
              {prefixComponent && React.cloneElement(prefixComponent)}
              {inputEl}
              {suffixComponent && React.cloneElement(suffixComponent)}
            </div>
          ) : (
            inputEl
          )}
        </>
      )}
    </>
  );
}

Input.propTypes = {
  /** Label for input */
  children: PropTypes.node.isRequired,
  /**
   * See [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)
   */
  describedBy: PropTypes.string,
  /** Error message to display */
  error: PropTypes.string,
  /** ID of the input */
  id: PropTypes.string.isRequired,
  /**
   * Available modifiers to usa-input-group--[width] and usa-input--[width]
   * See [here](https://designsystem.digital.gov/components/input-prefix-suffix/#component-variants)
   */
  inputWidth: PropTypes.oneOf([
    '2xs',
    'xs',
    'sm',
    'small',
    'md',
    'medium',
    'lg',
    'xl',
    '2xl'
  ]),
  /** Function called when the input is modified */
  onChange: PropTypes.func,
  /** Used to set the value of the input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** If `true`, the input is outlined in green */
  success: PropTypes.bool,
  /** Type of the input */
  type: PropTypes.oneOf(['number', 'password', 'text', 'textarea']),
  /** ID of the `<Validation />` associated with this input */
  validationId: PropTypes.string,
  /** Array of validators to be run on this input */
  validators: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      regex: PropTypes.string.isRequired
    })
  )
};

Input.defaultProps = {
  success: false,
  type: 'text'
};
