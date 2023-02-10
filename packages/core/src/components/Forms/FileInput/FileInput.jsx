import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import fileInput from '@uswds/uswds/js/usa-file-input';

import { FormError, Label } from '..';
import { Hint } from '../..';

export default function FileInput({
  accept,
  children,
  disabled,
  error,
  hint,
  id,
  multiple,
  onChange,
  value,
  wrongFileTypeErrorMessage
}) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    fileInput.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      fileInput.off(containerEl);
    };
  }, []);

  // call USWDS's `enable` or `disable` function when the disabled prop changes
  useEffect(() => {
    if (!containerRef.current) return;
    const inputEl = containerRef.current.querySelector(`#${id}`);

    const disabledState = inputEl.disabled;
    if (disabled === disabledState) return;

    // if disabled doesnt already have the right state
    if (disabled) fileInput.disable(inputEl);
    else fileInput.enable(inputEl);
  }, [disabled]);

  const hintId = `${id}--hint`;
  return (
    <div className="bah-uswds-file-input" ref={containerRef}>
      <Label target={id}>{children}</Label>

      <FormError error={error} />

      {hint ? <Hint id={hintId}>{hint}</Hint> : <></>}

      <div className="bah-uswds-file-input--wrapper">
        <input
          accept={accept}
          aria-describedby={hint ? hintId : undefined}
          className="usa-file-input"
          id={id}
          multiple={multiple}
          name={id}
          onChange={onChange}
          type="file"
          value={value}
          data-errormessage={wrongFileTypeErrorMessage}
        />
      </div>
    </div>
  );
}

FileInput.propTypes = {
  /**
   * String defining the file types the input should accept.
   * See here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-accept
   */
  accept: PropTypes.string,
  /** Label for input */
  children: PropTypes.node.isRequired,
  /** Should the file input be disabled? */
  disabled: PropTypes.bool,
  /** Error message to display */
  error: PropTypes.string,
  /** Hint to be shown for the file input */
  hint: PropTypes.node,
  /** ID of the input */
  id: PropTypes.string.isRequired,
  /** Should the file input accept multiple files? */
  multiple: PropTypes.bool,
  /** Function called when the file selection changes */
  onChange: PropTypes.func,
  /** Used to set the value for the file input */
  value: PropTypes.object,
  /** Used to override the error message shown when an invalid file type is selected */
  wrongFileTypeErrorMessage: PropTypes.string
};

FileInput.defaultProps = {
  disabled: false,
  multiple: false
};
