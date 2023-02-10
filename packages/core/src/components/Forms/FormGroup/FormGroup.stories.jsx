/* eslint-disable react/prop-types */
import React from 'react';

import FormGroup from '.';
import { Form, Input } from '..';
import { GridContainer } from '../..';

export default {
  title: 'Forms/FormGroup',
  component: FormGroup,
  argTypes: {
    children: {
      control: {
        type: null
      }
    },
    input1Error: {
      table: {
        disable: true
      }
    }
  }
};

const Template = ({ input1Error, ...args }) => (
  <GridContainer>
    <Form>
      <FormGroup {...args}>
        <Input id="text-1" error={input1Error}>
          Text input
        </Input>

        <Input id="text-2">Another text input</Input>
      </FormGroup>
    </Form>
  </GridContainer>
);

export const formGroup = Template.bind({});

export const formGroupWithErrors = Template.bind({});
formGroupWithErrors.args = {
  error: true,
  input1Error: 'Error with input'
};
