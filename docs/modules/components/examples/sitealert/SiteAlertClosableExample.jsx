import React, { useState } from 'react';
import { Button, SiteAlert } from '@boozallen-uip/uswds-react-core';

export default function SiteAlertClosableExample() {
  const [alertShown, setAlertShown] = useState(true);

  return alertShown ? (
    <SiteAlert heading="Alert message" onClose={() => setAlertShown(false)}>
      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
    </SiteAlert>
  ) : (
    <Button onClick={() => setAlertShown(true)}>Show site alert</Button>
  );
}
