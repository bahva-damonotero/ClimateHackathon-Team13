import React from 'react';
import { action } from '@storybook/addon-actions';

import TimePicker from '.';
import { Form } from '..';

export default {
  title: 'Forms/TimePicker',
  component: TimePicker
};

const Template = (args) => (
  <Form>
    <TimePicker {...args} />
  </Form>
);

const defaultArgs = {
  children: 'Label',
  id: 'timepicker-example',
  onChange: action('onChange')
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const hint = Template.bind({});
hint.args = {
  ...defaultArgs,
  hint: 'hh:mm'
};

export const placeholder = Template.bind({});
placeholder.args = {
  ...defaultArgs,
  placeholder: 'Select a time'
};

export const initialValue = Template.bind({});
initialValue.args = {
  ...defaultArgs,
  value: '13:30'
};

export const minMax = Template.bind({});
minMax.storyName = 'Minimum & Maximum time';
minMax.args = {
  ...defaultArgs,
  maxTime: '17:00',
  minTime: '09:00'
};

export const differentStep = Template.bind({});
differentStep.args = {
  ...defaultArgs,
  step: 15
};

export const twentyFourHour = Template.bind({});
twentyFourHour.storyName = '24-Hour Format';
twentyFourHour.args = {
  ...defaultArgs,
  use24Hour: true
};
