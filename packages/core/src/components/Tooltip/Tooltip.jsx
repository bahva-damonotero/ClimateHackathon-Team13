import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import tooltip from '@uswds/uswds/js/usa-tooltip';

import {
  createClassString,
  flattenChildren
} from '@boozallen-uip/uswds-react-utils';

export default function Tooltip({ children, className, content, position }) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    tooltip.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      tooltip.off(containerEl);
    };
  }, []);

  return (
    <div
      className={createClassString(['bah-uswds-tooltip', className])}
      ref={containerRef}
    >
      {flattenChildren(React.Children.toArray(children)).map((child) =>
        React.cloneElement(child, {
          className: 'usa-tooltip',
          'data-position': position,
          title: content
        })
      )}
    </div>
  );
}

Tooltip.propTypes = {
  /** The content that when moused over or when focused should display the tooltip */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** The content of the tooltip */
  content: PropTypes.string.isRequired,
  /** The position of the tooltip */
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right'])
};

Tooltip.defaultProps = {
  position: 'right'
};
