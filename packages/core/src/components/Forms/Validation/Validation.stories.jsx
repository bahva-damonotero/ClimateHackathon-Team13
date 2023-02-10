/* eslint-disable react/prop-types */
import React from 'react';

import Validation from '.';
import { Form, Input } from '..';

export default {
  title: 'Forms/Validation',
  component: Validation
};

const defaultArgs = {
  inputLabel: 'Code',
  inputId: 'validation-example',
  id: 'validation-id',
  heading: 'Enter a code'
};

const Template = ({ inputLabel, inputId, inputValidators, ...args }) => (
  <Form>
    <Validation {...args}>
      <Input id={inputId} validationId={args.id} validators={inputValidators}>
        {inputLabel}
      </Input>
    </Validation>
  </Form>
);

export const oneValidation = Template.bind({});
oneValidation.storyName = '1 Validation';
oneValidation.args = {
  ...defaultArgs,
  requirements: [
    {
      text: 'Use at least 8 characters',
      validator: 'length'
    }
  ],
  inputValidators: [
    {
      name: 'length',
      regex: '^.{8,}$'
    }
  ]
};

export const twoValidations = Template.bind({});
twoValidations.storyName = '2 Validations';
twoValidations.args = {
  ...defaultArgs,
  requirements: [
    {
      text: 'Use at least one uppercase character',
      validator: 'uppercase'
    },
    {
      text: 'Use at least one number',
      validator: 'numerical'
    }
  ],
  inputValidators: [
    {
      name: 'uppercase',
      regex: '[A-Z]'
    },
    {
      name: 'numerical',
      regex: '\\d'
    }
  ]
};
