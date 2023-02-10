import React, { useState } from 'react';
import { DateInput, Form } from '@boozallen-uip/uswds-react-core';

export default function DateInputExample() {
  const [date, setDate] = useState();

  return (
    <Form>
      <DateInput
        hint="For example: 04 28 1986"
        id="dateinput-example"
        value={date}
        onChange={(newDate) => setDate({ ...date, ...newDate })}
      >
        DateInput Label
      </DateInput>
    </Form>
  );
}
