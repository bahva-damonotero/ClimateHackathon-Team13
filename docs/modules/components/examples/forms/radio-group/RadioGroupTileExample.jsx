import React, { useState } from 'react';
import {
  Form,
  Legend,
  Radio,
  RadioGroup,
  RadioLabelDescription
} from '@boozallen-uip/uswds-react-core';

export default function RadioGroupTileExample() {
  const historicalFigures = [
    { key: 'Sojourner Truth', value: 'soujourner-truth' },
    {
      key: 'Frederick Douglass',
      value: 'frederick-douglass',
      description:
        'This is optional text that can be used to describe the label in more detail.'
    },
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
        id="radio-group-tile-example"
        onChange={(e) => setValue(e.detail.value)}
        value={value}
        tile
      >
        <Legend>Select one historical figure</Legend>

        {historicalFigures.map((option) => (
          <Radio disabled={option.disabled} key={option.key} value={option}>
            {option.description ? (
              <>
                {option.key}
                <RadioLabelDescription>
                  {option.description}
                </RadioLabelDescription>
              </>
            ) : (
              option.key
            )}
          </Radio>
        ))}
      </RadioGroup>
    </Form>
  );
}
