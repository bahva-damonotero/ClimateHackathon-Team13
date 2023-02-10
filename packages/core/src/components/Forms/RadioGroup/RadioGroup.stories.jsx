/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from '@storybook/addons';

import RadioGroup from '.';
import { Form, Legend, Radio, RadioLabelDescription } from '..';

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  subcomponents: {
    Legend,
    Radio,
    RadioLabelDescription
  },
  argTypes: {
    label: {
      name: '<Legend> children',
      description: 'Label for the field',
      type: { required: true },
      table: {
        type: { summary: 'node' }
      }
    },
    screenReaderOnly: {
      name: '<Legend> screenReaderOnly',
      description:
        'If `true`, the label will only be visible to screen readers.',
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    children: {
      control: { type: null }
    }
  }
};

const genders = [
  { key: 'M', value: 'Male' },
  { key: 'F', value: 'Female' },
  { key: 'O', value: 'Other' },
  { disabled: true, key: 'P', value: 'Prefer not to say' }
];

function renderOptions() {
  return genders.map((option) => (
    <Radio disabled={option.disabled} key={option.key} value={option}>
      {option.value}
    </Radio>
  ));
}

const DefaultTemplate = ({ label, screenReaderOnly, ...args }) => {
  const [value, setValue] = useState();

  return (
    <Form>
      <RadioGroup
        onChange={(e) => setValue(e.detail.value)}
        value={value}
        {...args}
      >
        <Legend screenReaderOnly={screenReaderOnly}>{label}</Legend>

        {renderOptions()}
      </RadioGroup>
    </Form>
  );
};

const defaultArgs = {
  label: 'Gender',
  id: 'radio-group-example'
};

export const def = DefaultTemplate.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

const SelectionTemplate = ({ label, screenReaderOnly, ...args }) => (
  <Form>
    <RadioGroup {...args}>
      <Legend screenReaderOnly={screenReaderOnly}>{label}</Legend>

      {renderOptions()}
    </RadioGroup>
  </Form>
);

export const selection = SelectionTemplate.bind({});
selection.args = {
  ...defaultArgs,
  readOnly: true,
  value: genders[1]
};

export const error = SelectionTemplate.bind({});
error.args = {
  ...defaultArgs,
  readOnly: true,
  error: 'Please choose an option'
};

export const disabled = DefaultTemplate.bind({});
disabled.args = {
  ...defaultArgs,
  disabled: true
};

export const customComparatorFunction = SelectionTemplate.bind({});
customComparatorFunction.args = {
  ...defaultArgs,
  comparator: (value, option) => value.key === option.key,
  readOnly: true,
  value: genders[2]
};

const SimpleUsageTemplate = ({ label, screenReaderOnly, ...args }) => (
  <Form>
    <RadioGroup {...args}>
      <Legend screenReaderOnly={screenReaderOnly}>{label}</Legend>

      {genders.map((option) => (
        <Radio disabled={option.disabled} key={option.key}>
          {option.value}
        </Radio>
      ))}
    </RadioGroup>
  </Form>
);

export const simpleUsage = SimpleUsageTemplate.bind({});
simpleUsage.storyName = 'Simple Usage (no value props)';
simpleUsage.args = {
  ...defaultArgs,
  readOnly: true,
  value: genders[1].value
};

export const tile = DefaultTemplate.bind({});
tile.args = {
  ...defaultArgs,
  tile: true
};
const TileWithOptionsTextTemplate = ({ label, screenReaderOnly, ...args }) => {
  const [value, setValue] = useState();

  return (
    <Form>
      <RadioGroup
        onChange={(e) => setValue(e.detail.value)}
        value={value}
        {...args}
      >
        <Legend screenReaderOnly={screenReaderOnly}>{label}</Legend>

        <Radio value="choiceOne" checked={value === 'choiceOne'}>
          Choice One
        </Radio>

        <Radio value="choiceTwo" checked={value === 'choiceTwo'}>
          Choice Two
          <RadioLabelDescription>
            This is optional text that can be used to describe the label in more
            detail.
          </RadioLabelDescription>
        </Radio>

        <Radio disabled>Choice Three</Radio>
      </RadioGroup>
    </Form>
  );
};

export const tileWithOptionsText = TileWithOptionsTextTemplate.bind({});
tileWithOptionsText.args = {
  label: 'Label',
  id: 'radio-group-example',
  tile: true
};
