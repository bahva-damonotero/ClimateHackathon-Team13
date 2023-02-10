import React, { useState } from 'react';
import { Form, Input, Button } from '@boozallen-uip/uswds-react-core';

export default function FormExample() {
  const [value, setValue] = useState('');

  function onChange(e) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`Final value: ${value}`);
  }

  return (
    <Form id="form-example" onSubmit={onSubmit}>
      <Input id="text-input" onChange={onChange} value={value}>
        Input Label
      </Input>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
