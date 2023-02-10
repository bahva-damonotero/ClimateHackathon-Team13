import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import accordion from '@uswds/uswds/js/usa-accordion';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function AccordionGroup({
  border,
  children,
  className,
  multiselect,
  ...props
}) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    accordion.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      accordion.off(containerEl);
    };
  }, []);

  return (
    <div
      className={createClassString(['bah-uswds-accordion', className])}
      ref={containerRef}
    >
      <div
        className={createClassString([
          'usa-accordion',
          border ? 'usa-accordion--bordered' : '',
          multiselect ? 'usa-accordion--multiselectable' : ''
        ])}
        data-allow-multiple={multiselect ? true : undefined}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

AccordionGroup.propTypes = {
  /** Should the accordions have a border? */
  border: PropTypes.bool,
  /** `<AccordionItem />` node(s) */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Should the accordion allow multiple expanded accordion items simultaneously? */
  multiselect: PropTypes.bool
};

AccordionGroup.defaultProps = {
  border: false,
  multiselect: false
};
