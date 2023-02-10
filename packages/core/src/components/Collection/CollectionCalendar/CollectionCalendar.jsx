import React from 'react';
import PropTypes from 'prop-types';

export default function CollectionCalendar({ dateTime, day, month }) {
  return (
    <div className="usa-collection__calendar-date">
      <time dateTime={dateTime}>
        <span className="usa-collection__calendar-date-month">{month}</span>
        <span className="usa-collection__calendar-date-day">{day}</span>
      </time>
    </div>
  );
}

CollectionCalendar.propTypes = {
  /** DateTime Formatted string for the calendar i.e. 2020-09-30T12:00:00+01:00 */
  dateTime: PropTypes.string,
  /** Day of the calendar */
  day: PropTypes.number,
  /**  Month of the calendar */
  month: PropTypes.string
};
