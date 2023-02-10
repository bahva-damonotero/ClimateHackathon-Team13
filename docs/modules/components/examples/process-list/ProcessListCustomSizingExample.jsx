import React from 'react';
import {
  ProcessList,
  ProcessListItem,
  ProcessListItemHeader
} from '@boozallen-uip/uswds-react-core';

export default function ProcessListExample() {
  const headerClasses = 'font-sans-xl line-height-sans-4';
  const itemClasses = 'font-sans-md padding-bottom-4 text-light';

  return (
    <ProcessList>
      <ProcessListItem classname={itemClasses}>
        <ProcessListItemHeader className={headerClasses}>
          Start a Process
        </ProcessListItemHeader>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>
            Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
            condimentum.
          </li>
          <li>Aliquam erat volutpat. Sed quis velit.</li>
        </ul>
      </ProcessListItem>

      <ProcessListItem classname={itemClasses}>
        <ProcessListItemHeader className={headerClasses}>
          Proceed to the second step
        </ProcessListItemHeader>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </ProcessListItem>

      <ProcessListItem classname={itemClasses}>
        <ProcessListItemHeader className={headerClasses}>
          Complete the step-by-step process
        </ProcessListItemHeader>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </ProcessListItem>
    </ProcessList>
  );
}
