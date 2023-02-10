/* eslint-disable react/prop-types */
import React from 'react';

import DateRangePicker from '.';
import { DatePicker, Form } from '..';

export default {
  title: 'Forms/DateRangePicker',
  component: DateRangePicker,
  subcomponents: {
    DatePicker
  },
  argTypes: {
    startLabel: {
      name: 'start <DatePicker> children',
      description: 'Label for the start `<DatePicker>`',
      type: { required: true },
      table: {
        type: { summary: 'node' }
      }
    },
    startId: {
      name: 'start <DatePicker> id',
      description: 'ID for the start `<DatePicker>`',
      type: { required: true },
      table: {
        type: { summary: 'string' }
      }
    },
    endLabel: {
      name: 'end <DatePicker> children',
      description: 'Label for the end `<DatePicker>`',
      type: { required: true },
      table: {
        type: { summary: 'node' }
      }
    },
    endId: {
      name: 'end <DatePicker> id',
      description: 'ID for the end `<DatePicker>`',
      type: { required: true },
      table: {
        type: { summary: 'string' }
      }
    },
    children: {
      control: { type: null }
    }
  }
};

const Template = ({
  startId,
  startLabel,
  endId,
  endLabel,
  disabled,
  ...args
}) => (
  <Form>
    <DateRangePicker {...args}>
      <DatePicker disabled={disabled} id={startId}>
        {startLabel}
      </DatePicker>

      <DatePicker disabled={disabled} id={endId}>
        {endLabel}
      </DatePicker>
    </DateRangePicker>
  </Form>
);

const defaultArgs = {
  startId: 'date-range-picker-example-start',
  endId: 'date-range-picker-example-end',
  startLabel: 'Start date',
  endLabel: 'End date'
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};
