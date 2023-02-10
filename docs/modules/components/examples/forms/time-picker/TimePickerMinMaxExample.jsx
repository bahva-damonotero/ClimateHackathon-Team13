import React from 'react';
import { Form, TimePicker } from '@boozallen-uip/uswds-react-core';

export default function TimePickerMinMaxExample() {
  return (
    <Form>
      <TimePicker
        id="timepicker-min-max-example"
        hint="hh:mm"
        minTime="9:30"
        maxTime="13:30"
      >
        Select a Time
      </TimePicker>
    </Form>
  );
}
