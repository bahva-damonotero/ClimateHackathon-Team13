import React from 'react';
import { Form, TimePicker } from '@boozallen-uip/uswds-react-core';

export default function TimePicker24HrExample() {
  return (
    <Form>
      <TimePicker id="timepicker-24-hr-example" hint="hh:mm" use24Hour>
        Select a Time
      </TimePicker>
    </Form>
  );
}
