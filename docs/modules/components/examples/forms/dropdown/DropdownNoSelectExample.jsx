import React, { useState } from 'react';
import { Dropdown, Form } from '@boozallen-uip/uswds-react-core';

export default function DropdownNoSelectExample() {
  const [value, setValue] = useState();

  const options = ['One', 'Two', 'Three'];

  return (
    <Form>
      <Dropdown
        id="dropdown-example"
        options={options}
        showSelectOption={false}
        value={value}
        onChange={(e) => setValue(e.detail.value)}
      >
        Dropdown Label
      </Dropdown>
    </Form>
  );
}
