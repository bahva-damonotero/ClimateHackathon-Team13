import React from 'react';
import { render } from '@testing-library/react';

import { CollectionCalendar } from '..';

describe('CollectionCalendar', () => {
  const dateTime = '2020-09-30T12:00:00+01:00';
  const day = 30;
  const month = 'SEP';

  const CALENDAR_SELECTOR = '.usa-collection__calendar-date';

  it('should render properly', () => {
    const { container } = render(
      <CollectionCalendar dateTime={dateTime} day={day} month={month} />
    );

    const calendarMonth = container.querySelector(
      '.usa-collection__calendar-date-month'
    );
    const calendarDay = container.querySelector(
      '.usa-collection__calendar-date-day'
    );
    const calendarDateTime = container.querySelector(CALENDAR_SELECTOR);

    expect(calendarDateTime.children[0].getAttribute('dateTime')).toBe(
      dateTime
    );
    expect(calendarMonth.innerHTML).toBe(month);
    expect(Number(calendarDay.innerHTML)).toBe(day);
  });
});
