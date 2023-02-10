import React from 'react';
import { Alert } from '@boozallen-uip/uswds-react-core';

export default function AlertNoIconExample() {
  return (
    <>
      <Alert icon={false} heading="Alert Info Example" type="info">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert icon={false} heading="Alert Error Example" type="error">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert icon={false} heading="Alert Success Example" type="success">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>

      <Alert icon={false} heading="Alert Warning Example" type="warning">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </Alert>
    </>
  );
}
