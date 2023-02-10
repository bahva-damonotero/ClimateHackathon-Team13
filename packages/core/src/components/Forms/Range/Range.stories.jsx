import React from 'react';

import Range from '.';
import { Form } from '..';

export default {
  title: 'Forms/Range',
  component: Range
};

const Template = (args) => (
  <Form>
    <Range {...args} />
  </Form>
);

const defaultArgs = {
  children: 'Label',
  id: 'range-example',
  min: 0,
  max: 100,
  step: 10
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const selection = Template.bind({});
selection.args = {
  ...defaultArgs,
  readOnly: true,
  value: 50
};

export const disabled = Template.bind({});
disabled.args = {
  ...defaultArgs,
  disabled: true
};

export const error = Template.bind({});
error.args = {
  ...defaultArgs,
  error: 'Error with form field'
};
