import React from 'react';
import { Alert } from '@boozallen-uip/uswds-react-core';

export default function AlertCloseExample() {
  function onClose() {
    // do nothing
  }

  return (
    <>
      <Alert heading="Alert Info Example" type="info" onClose={onClose}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert heading="Alert Error Example" type="error" onClose={onClose}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert heading="Alert Success Example" type="success" onClose={onClose}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert heading="Alert Warning Example" type="warning" onClose={onClose}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>
    </>
  );
}
