import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function AccordionItem({
  children,
  className,
  expanded,
  heading,
  id
}) {
  return (
    <>
      <h2 className="usa-accordion__heading">
        <button
          className="usa-accordion__button"
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
        >
          {heading}
        </button>
      </h2>

      <div
        id={id}
        className={createClassString(['usa-accordion__content', className])}
      >
        {children}
      </div>
    </>
  );
}

AccordionItem.propTypes = {
  /** Body content of the accordion item */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Should the accordion item start expanded? */
  expanded: PropTypes.bool,
  /** Heading content of the accordion item */
  heading: PropTypes.node.isRequired,
  /** ID used for controlling the expansion and collapse of the accordion item */
  id: PropTypes.string.isRequired
};

AccordionItem.defaultProps = {
  expanded: false
};
