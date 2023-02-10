import React from 'react';
import { action } from '@storybook/addon-actions';

import Form from '../Form';
import DatePicker from '.';

export default {
  title: 'Forms/DatePicker',
  component: DatePicker
};

const Template = (args) => (
  <Form>
    <DatePicker {...args} />
  </Form>
);

const defaultArgs = {
  children: 'Label',
  id: 'datepicker-example',
  onChange: action('onChange')
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const initialValue = Template.bind({});
initialValue.args = {
  ...defaultArgs,
  value: '2020-01-01'
};

export const minAndMaxDate = Template.bind({});
minAndMaxDate.args = {
  ...defaultArgs,
  minDate: '1995-10-25',
  maxDate: '1999-12-12'
};

export const dateRange = Template.bind({});
dateRange.storyName = 'Date range (different from Date Range Picker)';
dateRange.args = {
  ...defaultArgs,
  rangeDate: '2020-10-08'
};
