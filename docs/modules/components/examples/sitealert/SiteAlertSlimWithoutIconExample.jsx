import React from 'react';
import { SiteAlert } from '@boozallen-uip/uswds-react-core';

export default function SiteAlertSlimWithoutIconExample() {
  return (
    <SiteAlert emergency heading="Alert message" icon={false} slim>
      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
    </SiteAlert>
  );
}
