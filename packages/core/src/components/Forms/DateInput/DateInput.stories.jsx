import React from 'react';

import Form from '../Form';
import DateInput from '.';

export default {
  title: 'Forms/DateInput',
  component: DateInput
};

const Template = (args) => (
  <Form>
    <DateInput {...args} />
  </Form>
);

const defaultArgs = {
  children: 'Label',
  id: 'dateinput-example'
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const hint = Template.bind({});
hint.args = {
  ...defaultArgs,
  hint: 'For example: 04 28 1986'
};

export const value = Template.bind({});
value.args = {
  ...defaultArgs,
  value: { day: 1, month: 1, year: 1970 },
  readOnly: true
};

export const error = Template.bind({});
error.args = {
  ...defaultArgs,
  error: 'Error with form field(s)'
};
