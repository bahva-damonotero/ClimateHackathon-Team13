import React, { useState } from 'react';
import { ComboBox, Form } from '@boozallen-uip/uswds-react-core';

export default function ComboBoxExample() {
  const [value, setValue] = useState();

  const people = ['John', 'Jane', 'Bob'];

  return (
    <Form id="combobox-example-form">
      <ComboBox
        id="combobox-example"
        options={people}
        placeholder="Select a person"
        value={value}
        onChange={(e) => setValue(e.detail.value)}
      >
        ComboBox Label
      </ComboBox>
    </Form>
  );
}
