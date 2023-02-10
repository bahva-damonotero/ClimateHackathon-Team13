import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import dateRangePicker from '@uswds/uswds/js/usa-date-range-picker';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function DateRangePicker({ children, className }) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    dateRangePicker.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      dateRangePicker.off(containerEl);
    };
  }, []);

  return (
    <div
      className={createClassString(['bah-uswds-date-range-picker', className])}
      ref={containerRef}
    >
      <div className="usa-date-range-picker">{children}</div>
    </div>
  );
}

DateRangePicker.propTypes = {
  /** Should contain two `<DatePicker />` node(s) */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string
};
