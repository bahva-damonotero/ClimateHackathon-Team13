import React, { useState } from 'react';
import {
  Form,
  Input,
  FormGroup,
  CharacterCount
} from '@boozallen-uip/uswds-react-core';

export default function CharacterCountExample() {
  const [value, setValue] = useState();

  const idText = 'character-count-example-1';
  const idTextArea = 'character-count-example-2';
  const maxLength = 25;

  return (
    <Form>
      <CharacterCount target={idText}>
        <FormGroup>
          <Input
            describedBy={`character-count--${idText}`}
            id={idText}
            maxLength={maxLength}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            Text input
          </Input>
        </FormGroup>
      </CharacterCount>

      <CharacterCount target={idTextArea}>
        <FormGroup>
          <Input
            describedBy={`character-count--${idTextArea}`}
            id={idTextArea}
            maxLength={maxLength}
            type="textarea"
          >
            Textarea input
          </Input>
        </FormGroup>
      </CharacterCount>
    </Form>
  );
}
