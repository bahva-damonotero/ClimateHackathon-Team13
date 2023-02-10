import React from 'react';
import { action } from '@storybook/addon-actions';

import { Form } from '..';
import Dropdown from '.';

export default {
  title: 'Forms/Dropdown',
  component: Dropdown
};

const Template = (args) => (
  <Form>
    <Dropdown {...args} />
  </Form>
);

const defaultArgs = {
  children: 'Label',
  id: 'dropdown-example',
  options: [
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    {
      firstName: 'Bob',
      lastName: 'Bobson'
    }
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
  value: defaultArgs.options[1],
  onChange: undefined,
  readOnly: true
};

export const noSelectOption = Template.bind({});
noSelectOption.storyName = 'No "- Select -" option';
noSelectOption.args = {
  ...defaultArgs,
  showSelectOption: false
};

export const error = Template.bind({});
error.args = {
  ...defaultArgs,
  error: 'Invalid selection'
};

export const customComparatorFunction = Template.bind({});
customComparatorFunction.args = {
  ...defaultArgs,
  comparator: (value, option) =>
    value.firstName === option.firstName && value.lastName === option.lastName,
  value: defaultArgs.options[2],
  onChange: undefined,
  readOnly: true
};

export const stringArray = Template.bind({});
stringArray.args = {
  ...defaultArgs,
  options: ['John Doe', 'Jane Doe', 'Bob Bobson'],
  optionRenderer: undefined
};
