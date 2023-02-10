import React from 'react';
import { Form, Range } from '@boozallen-uip/uswds-react-core';

export default function RangeExample() {
  return (
    <Form>
      <Range id="range-example" min={0} max={100} step={10}>
        Range Label
      </Range>
    </Form>
  );
}
