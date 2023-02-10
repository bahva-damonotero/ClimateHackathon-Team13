import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import characterCount from '@uswds/uswds/js/usa-character-count';

export default function CharacterCount({ children, target }) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // add the .usa-character-count__field class to the target input
    const input = containerEl.querySelector(`#${target}`);
    input.classList.add('usa-character-count__field');

    // call USWDS's `on` function to initialize the component
    characterCount.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      characterCount.off(containerEl);
    };
  }, []);

  return (
    <div className="bah-uswds-character-count" ref={containerRef}>
      <div className="usa-character-count">
        {children}

        <span
          id={`character-count--${target}`}
          className="usa-hint usa-character-count__message"
          aria-live="polite"
        />
      </div>
    </div>
  );
}

CharacterCount.propTypes = {
  children: PropTypes.node.isRequired,
  /** ID of the input to show the character count for */
  target: PropTypes.string.isRequired
};
