import React from 'react';
import {
  Form,
  FormNote,
  Input,
  ShowPassword
} from '@boozallen-uip/uswds-react-core';

export default function ShowPasswordSingleExample() {
  return (
    <Form id="show-password-single-example">
      <Input id="password" type="password">
        Password
      </Input>

      <FormNote>
        <ShowPassword target="password" />
      </FormNote>
    </Form>
  );
}
