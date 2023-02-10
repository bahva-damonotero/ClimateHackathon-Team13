import React from 'react';
import { Form, Input } from '@boozallen-uip/uswds-react-core';

export default function InputCustomWidthExample() {
  return (
    <Form>
      <Input id="input-small" inputWidth="sm">
        Small
      </Input>

      <Input id="input-medium" inputWidth="md">
        Medium
      </Input>

      <Input id="input-large" inputWidth="lg">
        Large
      </Input>
    </Form>
  );
}
