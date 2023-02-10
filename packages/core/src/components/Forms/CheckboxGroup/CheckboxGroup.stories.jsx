/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from '@storybook/addons';

import CheckboxGroup from '.';
import { Checkbox, CheckboxLabelDescription, Form, Legend } from '..';

export default {
  title: 'Forms/CheckboxGroup',
  component: CheckboxGroup,
  subcomponents: {
    Legend,
    Checkbox,
    CheckboxLabelDescription
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

const defaultArgs = {
  id: 'checkbox-group-example',
  label: 'Label'
};

const DefaultTemplate = ({ label, screenReaderOnly, ...args }) => {
  const [choiceOne, setChoiceOne] = useState(false);
  const [choiceTwo, setChoiceTwo] = useState(false);

  return (
    <Form>
      <CheckboxGroup {...args}>
        <Legend screenReaderOnly={screenReaderOnly}>{label}</Legend>

        <Checkbox
          checked={choiceOne}
          onChange={(e) => setChoiceOne(e.target.checked)}
        >
          Choice One
        </Checkbox>

        <Checkbox
          checked={choiceTwo}
          onChange={(e) => setChoiceTwo(e.target.checked)}
        >
          Choice Two
        </Checkbox>

        <Checkbox disabled>Choice Three</Checkbox>
      </CheckboxGroup>
    </Form>
  );
};

export const def = DefaultTemplate.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

const SelectionsTemplate = ({ label, screenReaderOnly, ...args }) => (
  <Form>
    <CheckboxGroup {...args}>
      <Legend screenReaderOnly={screenReaderOnly}>{label}</Legend>

      <Checkbox checked readOnly>
        Choice One
      </Checkbox>

      <Checkbox readOnly>Choice Two</Checkbox>

      <Checkbox checked disabled>
        Choice Three
      </Checkbox>
    </CheckboxGroup>
  </Form>
);

export const selections = SelectionsTemplate.bind({});
selections.args = {
  ...defaultArgs
};

export const error = SelectionsTemplate.bind({});
error.args = {
  ...defaultArgs,
  error: 'Please check all 3 boxes'
};

export const tile = DefaultTemplate.bind({});
tile.args = {
  ...defaultArgs,
  tile: true
};

const TileWithOptionalTextTemplate = ({ label, screenReaderOnly, ...args }) => {
  const [choiceOne, setChoiceOne] = useState(false);
  const [choiceTwo, setChoiceTwo] = useState(false);

  return (
    <Form>
      <CheckboxGroup {...args}>
        <Legend screenReaderOnly={screenReaderOnly}>{label}</Legend>

        <Checkbox
          checked={choiceOne}
          onChange={(e) => setChoiceOne(e.target.checked)}
        >
          Choice One
        </Checkbox>

        <Checkbox
          checked={choiceTwo}
          onChange={(e) => setChoiceTwo(e.target.checked)}
        >
          Choice Two
          <CheckboxLabelDescription>
            This is optional text that can be used to describe the label in more
            detail.
          </CheckboxLabelDescription>
        </Checkbox>

        <Checkbox disabled>Choice Three</Checkbox>
      </CheckboxGroup>
    </Form>
  );
};

export const tileWithOptionalText = TileWithOptionalTextTemplate.bind({});
tileWithOptionalText.args = {
  ...defaultArgs,
  tile: true
};
