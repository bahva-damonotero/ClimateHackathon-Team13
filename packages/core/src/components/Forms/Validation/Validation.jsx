import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import validation from '@uswds/uswds/js/usa-validation';

export default function Validation({ children, heading, id, requirements }) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    validation.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      validation.off(containerEl);
    };
  }, []);

  return (
    <div className="bah-uswds-validation" ref={containerRef}>
      <div className="usa-alert usa-alert--info usa-alert--validation">
        <div className="usa-alert__body">
          <h3 className="usa-alert__heading">{heading}</h3>

          <ul className="usa-checklist" id={id}>
            {requirements.map(({ text, validator }) => (
              <li
                className="usa-checklist__item"
                data-validator={validator}
                key={`${id}--${validator}`}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {children}
    </div>
  );
}

Validation.propTypes = {
  children: PropTypes.node.isRequired,
  /** Heading content */
  heading: PropTypes.node.isRequired,
  /** ID of the validation */
  id: PropTypes.string.isRequired,
  /** Array of requirements */
  requirements: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      validator: PropTypes.string.isRequired
    })
  )
};
