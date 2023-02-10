import React, { useState } from 'react';
import { DatePicker, Form } from '@boozallen-uip/uswds-react-core';

export default function DatePickerExample() {
  const [value, setValue] = useState();

  return (
    <Form id="date-picker-example-form">
      <DatePicker
        id="datepicker-example"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        DatePicker Label
      </DatePicker>
    </Form>
  );
}
