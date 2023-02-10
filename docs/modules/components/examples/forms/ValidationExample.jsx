import React, { useState } from 'react';
import { Form, Input, Validation } from '@boozallen-uip/uswds-react-core';

export default function ShowPasswordSingleExample() {
  const [code, setCode] = useState();

  const requirements = [
    {
      text: 'Use at least one uppercase character',
      validator: 'uppercase'
    },
    {
      text: 'Use at least one number',
      validator: 'numerical'
    }
  ];

  const validators = [
    {
      name: 'uppercase',
      regex: '[A-Z]'
    },
    {
      name: 'numerical',
      regex: '\\d'
    }
  ];

  return (
    <Form large>
      <Validation
        heading="Enter a code"
        id="validation-example"
        requirements={requirements}
      >
        <Input
          id="password"
          onChange={(e) => setCode(e.target.value)}
          type="password"
          validationId="validation-example"
          validators={validators}
          value={code}
        >
          Password
        </Input>
      </Validation>
    </Form>
  );
}
