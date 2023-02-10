import React from 'react';

import Form from '.';
import { Fieldset, FormError, FormNote, Input, Label, Legend } from '..';
import { GridContainer } from '../..';

export default {
  title: 'Forms/Form',
  component: Form,
  subcomponents: {
    Fieldset,
    FormError,
    FormNote,
    Label,
    Legend
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
};

const Template = (args) => (
  <GridContainer>
    <Form {...args}>
      <Input id="text-1">Text input</Input>

      <Input id="text-2">Another text input</Input>
    </Form>
  </GridContainer>
);

export const basicForm = Template.bind({});

export const largeForm = Template.bind({});
largeForm.args = {
  large: true
};
