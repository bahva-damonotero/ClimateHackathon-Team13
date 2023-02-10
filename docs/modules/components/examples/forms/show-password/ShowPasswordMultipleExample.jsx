import React from 'react';
import {
  Form,
  FormNote,
  Input,
  ShowPassword
} from '@boozallen-uip/uswds-react-core';

export default function ShowPasswordMultipleExample() {
  return (
    <Form id="show-password-multiple-example">
      <Input id="newPass" type="password">
        New Password
      </Input>

      <Input id="confirmPass" type="password">
        Confirm Password
      </Input>

      <FormNote>
        <ShowPassword target={['newPass', 'confirmPass']} />
      </FormNote>
    </Form>
  );
}
