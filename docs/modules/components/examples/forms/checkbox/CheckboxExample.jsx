import React, { useState } from 'react';
import { Checkbox, Form } from '@boozallen-uip/uswds-react-core';

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <Form>
      <Checkbox
        checked={checked}
        id="checkbox-example"
        onChange={(e) => setChecked(e.target.checked)}
      >
        Checkbox Label
      </Checkbox>
    </Form>
  );
}
