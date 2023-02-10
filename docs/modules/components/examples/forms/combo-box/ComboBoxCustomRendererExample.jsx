import React, { useState } from 'react';
import { ComboBox, Form } from '@boozallen-uip/uswds-react-core';

export default function ComboBoxCustomRendererExample() {
  const [value, setValue] = useState();

  const people = [
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    {
      firstName: 'Bob',
      lastName: 'Bobson'
    }
  ];

  const renderPerson = ({ firstName, lastName }) => `${firstName} ${lastName}`;

  return (
    <Form id="combobox-example-form">
      <ComboBox
        id="combobox-example"
        options={people}
        optionRenderer={renderPerson}
        placeholder="Select a person"
        value={value}
        onChange={(e) => setValue(e.detail.value)}
      >
        ComboBox Label
      </ComboBox>
    </Form>
  );
}
