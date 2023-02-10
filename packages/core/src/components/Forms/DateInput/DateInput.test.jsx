import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import DateInput from '.';

describe('DateInput', () => {
  const id = 'date-input-example';

  it('should call `onChange` with date data that was changed', () => {
    const onChange = jest.fn();

    const { container } = render(
      <DateInput id={id} onChange={onChange}>
        Label
      </DateInput>
    );

    fireEvent.change(container.querySelector(`#${id}--month`), {
      target: { value: 10 }
    });
    expect(onChange.mock.calls[0][0]).toEqual({ month: '10' });

    fireEvent.change(container.querySelector(`#${id}--day`), {
      target: { value: 25 }
    });
    expect(onChange.mock.calls[1][0]).toEqual({ day: '25' });

    fireEvent.change(container.querySelector(`#${id}--year`), {
      target: { value: 1995 }
    });
    expect(onChange.mock.calls[2][0]).toEqual({ year: '1995' });
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <DateInput
          hint="For example: 04 28 1986"
          id={id}
          readOnly
          value={{ month: 10, day: 25, year: 1995 }}
        >
          Label
        </DateInput>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
