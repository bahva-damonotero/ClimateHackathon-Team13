import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import dateRangePicker from '@uswds/uswds/js/usa-date-range-picker';

import DateRangePicker from '.';
import { DatePicker } from '..';

describe('DateRangePicker', () => {
  const jsx = (
    <DateRangePicker>
      <DatePicker id="date-range-picker-test-start">
        Start Date Label
      </DatePicker>

      <DatePicker id="date-range-picker-test-end">End Date Label</DatePicker>
    </DateRangePicker>
  );

  it('should call `dateRangePicker.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(dateRangePicker, 'on');

    render(jsx);

    expect(onSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
