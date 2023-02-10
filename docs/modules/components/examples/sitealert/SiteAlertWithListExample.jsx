import React from 'react';
import { SiteAlert } from '@boozallen-uip/uswds-react-core';

export default function SiteAlertWithListExample() {
  return (
    <SiteAlert emergency heading="Alert message">
      <ul className="usa-list">
        <li>Item one</li>
        <li>Item two</li>
      </ul>
    </SiteAlert>
  );
}
