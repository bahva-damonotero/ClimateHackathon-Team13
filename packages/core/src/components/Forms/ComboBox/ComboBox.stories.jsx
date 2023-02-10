import React from 'react';
import { action } from '@storybook/addon-actions';

import ComboBox from '.';
import { Form } from '..';

export default {
  title: 'Forms/ComboBox',
  component: ComboBox
};

const Template = (args) => (
  <Form>
    <ComboBox {...args} />
  </Form>
);

const defaultArgs = {
  children: 'Select your desired option',
  id: 'combobox-example',
  options: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Bob', lastName: 'Bobson' }
  ],
  optionRenderer: ({ firstName, lastName }) => `${firstName} ${lastName}`,
  onChange: action('onChange')
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const selection = Template.bind({});
selection.args = {
  ...defaultArgs,
  value: defaultArgs.options[0]
};

export const customComparator = Template.bind({});
customComparator.args = {
  ...defaultArgs,
  comparator: (value, option) =>
    value && option
      ? value.firstName === option.firstName &&
        value.lastName === option.lastName
      : false,
  value: defaultArgs.options[2]
};

export const placeholder = Template.bind({});
placeholder.args = {
  ...defaultArgs,
  placeholder: 'Select an option'
};

export const error = Template.bind({});
error.args = {
  ...defaultArgs,
  error: 'Invalid selection'
};

export const stringArray = Template.bind({});
stringArray.args = {
  ...defaultArgs,
  options: ['Bob Bobson', 'Jane Doe', 'John Doe'],
  optionRenderer: undefined
};
