import React from 'react';

import ShowPassword from '.';
import { Form, FormNote, Input } from '..';

export default {
  title: 'Forms/ShowPassword',
  component: ShowPassword,
  subcomponents: {
    Input
  }
};

const OneFieldTemplate = (args) => (
  <Form>
    <Input id="password" type="password">
      Password
    </Input>

    <FormNote>
      <ShowPassword {...args} />
    </FormNote>
  </Form>
);

export const oneField = OneFieldTemplate.bind({});
oneField.args = {
  target: 'password'
};

const TwoFieldsTemplate = (args) => (
  <Form>
    <Input id="newPass" type="password">
      New Password
    </Input>

    <Input id="confirmPass" type="password">
      Confirm Password
    </Input>

    <FormNote>
      <ShowPassword {...args} />
    </FormNote>
  </Form>
);

export const twoFields = TwoFieldsTemplate.bind({});
twoFields.args = {
  target: ['newPass', 'confirmPass']
};
