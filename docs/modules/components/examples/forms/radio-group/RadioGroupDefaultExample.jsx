import React, { useState } from 'react';
import {
  Form,
  Legend,
  Radio,
  RadioGroup
} from '@boozallen-uip/uswds-react-core';

export default function RadioGroupDefaultExample() {
  const historicalFigures = [
    { key: 'Sojourner Truth', value: 'soujourner-truth' },
    { key: 'Frederick Douglass', value: 'frederick-douglass' },
    { key: 'Booker T.  Washington', value: 'booker-t-washington' },
    {
      key: 'George Washington Carver',
      value: 'george-washington-carver',
      disabled: true
    }
  ];

  const [value, setValue] = useState();

  return (
    <Form>
      <RadioGroup
        id="radio-group-default-example"
        onChange={(e) => setValue(e.detail.value)}
        value={value}
      >
        <Legend>Select one historical figure</Legend>

        {historicalFigures.map((option) => (
          <Radio disabled={option.disabled} key={option.key} value={option}>
            {option.key}
          </Radio>
        ))}
      </RadioGroup>
    </Form>
  );
}
