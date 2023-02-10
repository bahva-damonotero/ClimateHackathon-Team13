import React, { useState } from 'react';
import { Dropdown, Form } from '@boozallen-uip/uswds-react-core';

export default function DropdownExample() {
  const [value, setValue] = useState();

  const options = ['One', 'Two', 'Three'];

  return (
    <Form>
      <Dropdown
        id="dropdown-example"
        options={options}
        value={value}
        onChange={(e) => setValue(e.detail.value)}
      >
        Dropdown Label
      </Dropdown>
    </Form>
  );
}
