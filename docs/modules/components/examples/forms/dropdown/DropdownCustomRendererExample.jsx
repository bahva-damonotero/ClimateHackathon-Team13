import React, { useState } from 'react';
import { Dropdown, Form } from '@boozallen-uip/uswds-react-core';

export default function DropdownCustomRendererExample() {
  const [dropdownValue, setValue] = useState();

  const options = [
    {
      key: '1',
      value: 'One'
    },
    {
      key: '2',
      value: 'Two'
    },
    {
      key: '3',
      value: 'Three'
    }
  ];
  const renderOption = ({ value }) => value;

  return (
    <Form>
      <Dropdown
        id="dropdown-example"
        optionRenderer={renderOption}
        options={options}
        value={dropdownValue}
        onChange={(e) => setValue(e.detail.value)}
      >
        Dropdown Label
      </Dropdown>
    </Form>
  );
}
