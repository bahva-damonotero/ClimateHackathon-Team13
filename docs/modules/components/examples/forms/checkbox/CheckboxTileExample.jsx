import React, { useState } from 'react';
import {
  Checkbox,
  CheckboxLabelDescription,
  Form
} from '@boozallen-uip/uswds-react-core';

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <Form>
      <Checkbox
        checked={checked}
        id="checkbox-example"
        onChange={(e) => setChecked(e.target.checked)}
        tile
      >
        Checkbox Label
        <CheckboxLabelDescription>
          This is optional text that can be used to describe the label in more
          detail.
        </CheckboxLabelDescription>
      </Checkbox>
    </Form>
  );
}
