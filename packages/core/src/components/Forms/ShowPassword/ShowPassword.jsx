import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import showPassword from '@uswds/uswds/js/_usa-password';

export default function ShowPassword({ target }) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    showPassword.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      showPassword.off(containerEl);
    };
  }, []);

  const multiple = Array.isArray(target);
  const ariaControls = multiple ? target.join(' ') : target;

  return (
    <span className="bah-uswds-show-password" ref={containerRef}>
      <button
        type="button"
        aria-controls={ariaControls}
        className="usa-show-password"
        data-show-text={multiple ? 'Show my typing' : 'Show password'}
        data-hide-text={multiple ? 'Hide my typing' : 'Hide password'}
      >
        {multiple ? 'Show my typing' : 'Show password'}
      </button>
    </span>
  );
}

ShowPassword.propTypes = {
  /** The ID or ID(s) of the input(s) to target */
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};
