import React from 'react';
import PropTypes from 'prop-types';

import { AccordionGroup, AccordionItem } from '..';

export default function Accordion({
  border,
  className,
  children,
  expanded,
  heading,
  id,
  ...props
}) {
  return (
    <AccordionGroup border={border} className={className} {...props}>
      <AccordionItem expanded={expanded} heading={heading} id={id}>
        {children}
      </AccordionItem>
    </AccordionGroup>
  );
}

Accordion.propTypes = {
  /** Should the accordion have a border? */
  border: PropTypes.bool,
  /** Body content of the accordion */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Should the accordion start expanded? */
  expanded: PropTypes.bool,
  /** Heading content of the accordion */
  heading: PropTypes.node.isRequired,
  /** ID used for controlling the expansion and collapse of the accordion */
  id: PropTypes.string.isRequired
};

Accordion.defaultProps = {
  border: false,
  expanded: false
};
