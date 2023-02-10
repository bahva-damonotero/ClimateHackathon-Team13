import React from 'react';
import { Form, TimePicker } from '@boozallen-uip/uswds-react-core';

export default function TimePickerDefaultExample() {
  return (
    <Form>
      <TimePicker id="timepicker-default-example" hint="hh:mm">
        Select a Time
      </TimePicker>
    </Form>
  );
}
