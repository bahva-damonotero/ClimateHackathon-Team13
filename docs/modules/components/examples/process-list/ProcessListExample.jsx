import React from 'react';
import {
  ProcessList,
  ProcessListItem,
  ProcessListItemHeader
} from '@boozallen-uip/uswds-react-core';

export default function ProcessListExample() {
  return (
    <ProcessList>
      <ProcessListItem>
        <ProcessListItemHeader>Start a Process</ProcessListItemHeader>
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

      <ProcessListItem>
        <ProcessListItemHeader>
          Proceed to the second step
        </ProcessListItemHeader>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </ProcessListItem>

      <ProcessListItem>
        <ProcessListItemHeader>
          Complete the step-by-step process
        </ProcessListItemHeader>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </ProcessListItem>
    </ProcessList>
  );
}
