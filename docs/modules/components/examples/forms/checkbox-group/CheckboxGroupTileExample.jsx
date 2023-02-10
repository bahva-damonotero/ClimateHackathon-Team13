import React, { useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Form,
  Legend
} from '@boozallen-uip/uswds-react-core';

export default function CheckboxExample() {
  const [choiceOne, setChoiceOne] = useState(false);
  const [choiceTwo, setChoiceTwo] = useState(false);

  return (
    <Form>
      <CheckboxGroup id="checkbox-group-example" tile>
        <Legend screenReaderOnly>Label</Legend>

        <Checkbox
          checked={choiceOne}
          onChange={(e) => setChoiceOne(e.target.checked)}
        >
          Choice One
        </Checkbox>

        <Checkbox
          checked={choiceTwo}
          onChange={(e) => setChoiceTwo(e.target.checked)}
        >
          Choice Two
        </Checkbox>
      </CheckboxGroup>
    </Form>
  );
}
