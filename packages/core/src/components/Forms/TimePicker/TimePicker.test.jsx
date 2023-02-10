import React from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import comboBox from '@uswds/uswds/js/usa-combo-box';
import timePicker from '@uswds/uswds/js/usa-time-picker';

import TimePicker from '.';

describe('TimePicker', () => {
  const id = 'timepicker-test';
  const label = 'Label';

  const INPUT_SELECTOR = `#${id}.usa-combo-box__input`;
  const SELECT_SELECTOR = `.usa-combo-box__select`;

  // Whether using the 24-hour or 12-hour time format, the value
  // for the options is always in 24-hour format. This test asserts
  // that the options' display text matches their values.
  it('should use the 24-hour time format', () => {
    const { container } = render(
      <TimePicker id={id} use24Hour>
        {label}
      </TimePicker>
    );

    const options = container.querySelectorAll('option');
    for (const option of options) {
      expect(option.value === option.innerHTML);
    }
  });

  it('should call `comboBox.on()` and `timePicker.on()` to initialize the component', () => {
    const comboBoxOnSpy = jest.spyOn(comboBox, 'on');
    const timePickerOnSpy = jest.spyOn(timePicker, 'on');

    render(<TimePicker id={id}>{label}</TimePicker>);

    expect(comboBoxOnSpy).toHaveBeenCalled();
    expect(timePickerOnSpy).toHaveBeenCalled();
  });

  it('should call `onChange` when the value changes', () => {
    const onChange = jest.fn();

    const { container } = render(
      <TimePicker id={id} onChange={onChange}>
        {label}
      </TimePicker>
    );

    const selectNode = container.querySelector(SELECT_SELECTOR);

    const event = createEvent(
      'change',
      selectNode,
      {
        detail: {
          value: 0
        }
      },
      { EventType: 'CustomEvent' }
    );
    fireEvent(selectNode, event);

    expect(onChange).toHaveBeenCalledWith(event);
  });

  it('should be able to update the value programmatically', () => {
    // render the time picker with no value
    const initialProps = {
      id,
      onChange: () => {}
    };

    const { container, rerender } = render(
      <TimePicker {...initialProps}>{label}</TimePicker>
    );

    const inputNode = container.querySelector(INPUT_SELECTOR);
    expect(inputNode.value).toBe('');

    // update the time picker's value programmatically/externally
    rerender(
      <TimePicker {...initialProps} value="22:30">
        {label}
      </TimePicker>
    );

    expect(inputNode.value).toBe('10:30pm');
  });

  it('changing the `disabled` prop to true should call `comboBox.disable()`', () => {
    const disableSpy = jest.spyOn(comboBox, 'disable');

    const { rerender } = render(<TimePicker id={id}>{label}</TimePicker>);

    rerender(
      <TimePicker id={id} disabled>
        {label}
      </TimePicker>
    );

    expect(disableSpy).toHaveBeenCalled();
  });

  it('changing the `disabled` prop to false should call `comboBox.enable()`', () => {
    const enableSpy = jest.spyOn(comboBox, 'enable');

    const { rerender } = render(
      <TimePicker id={id} disabled>
        {label}
      </TimePicker>
    );

    rerender(<TimePicker id={id}>{label}</TimePicker>);

    expect(enableSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <TimePicker hint="hh:mm" id={id}>
          {label}
        </TimePicker>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
