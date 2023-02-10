import React from 'react';

import { Form, FormGroup, Input } from '..';
import CharacterCount from '.';

const idText = 'character-count-example-1';
const idTextArea = 'character-count-example-2';
const maxLength = 25;

export default {
  title: 'Forms/CharacterCount',
  component: CharacterCount,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

export const inputAndTextarea = () => (
  <Form>
    <CharacterCount target={idText}>
      <FormGroup>
        <Input
          describedBy={`character-count--${idText}`}
          id={idText}
          maxLength={maxLength}
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
