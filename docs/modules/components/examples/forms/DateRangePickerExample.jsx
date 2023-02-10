import React, { useState } from 'react';
import {
  DatePicker,
  DateRangePicker,
  Form
} from '@boozallen-uip/uswds-react-core';

export default function DateRangePickerExample() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <Form id="date-range-picker-example-form">
      <DateRangePicker>
        <DatePicker
          id="date-range-picker-example-start"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        >
          Start date
        </DatePicker>

        <DatePicker
          id="date-range-picker-example-end"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        >
          End date
        </DatePicker>
      </DateRangePicker>
    </Form>
  );
}
