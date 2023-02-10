import React from 'react';
import { Form, FormGroup, Input } from '@boozallen-uip/uswds-react-core';

export default function FormGroupExample() {
  return (
    <Form id="form-group-example">
      <FormGroup error>
        <Input id="text-input" error="Input is invalid">
          Input Label
        </Input>
      </FormGroup>
    </Form>
  );
}
