import React from 'react';
import { Alert } from '@boozallen-uip/uswds-react-core';

export default function AlertSlimExample() {
  return (
    <>
      <Alert slim heading="Alert Info Example" type="info">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert slim heading="Alert Error Example" type="error">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert slim heading="Alert Success Example" type="success">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert slim heading="Alert Warning Example" type="warning">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>
    </>
  );
}
