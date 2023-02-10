import React from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import datePicker from '@uswds/uswds/js/usa-date-picker';

import DatePicker from '.';

describe('DatePicker', () => {
  const id = 'date-picker-example';
  const label = 'Label';

  const INPUT_SELECTOR = '.usa-date-picker__internal-input';
  const EXTERNAL_INPUT_SELECTOR = '.usa-date-picker__external-input';

  it('should call `datePicker.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(datePicker, 'on');

    render(<DatePicker id={id}>{label}</DatePicker>);

    expect(onSpy).toHaveBeenCalled();
  });

  it('should call `onChange` when the value is changed', () => {
    const onChange = jest.fn();

    const { container } = render(
      <DatePicker id={id} onChange={onChange}>
        {label}
      </DatePicker>
    );

    const inputNode = container.querySelector(INPUT_SELECTOR);

    const event = createEvent('change', inputNode, {
      target: { value: '1995-10-25' }
    });
    fireEvent(inputNode, event);

    expect(onChange).toHaveBeenCalledWith(event);
  });

  it('should be able to update the value programmatically', () => {
    // render the date picker with no value
    const initialProps = {
      id,
      onChange: () => {}
    };

    const { container, rerender } = render(
      <DatePicker {...initialProps}>{label}</DatePicker>
    );

    const inputNode = container.querySelector(INPUT_SELECTOR);
    expect(inputNode.value).toBe('');

    // update the date picker's value programmatically/externally
    const newValue = '1995-10-25';

    rerender(
      <DatePicker {...initialProps} value={newValue}>
        {label}
      </DatePicker>
    );

    expect(inputNode.value).toBe(newValue);
  });

  it('should be be able to clear the value programmatically', () => {
    // render the date picker with a value
    const initialValue = '1995-10-25';
    const initialProps = {
      id,
      onChange: () => {},
      value: initialValue
    };

    const { container, rerender } = render(
      <DatePicker {...initialProps}>{label}</DatePicker>
    );

    const hiddenInputNode = container.querySelector(INPUT_SELECTOR);
    const shownInputNode = container.querySelector(EXTERNAL_INPUT_SELECTOR);

    expect(hiddenInputNode.value).toBe(initialValue);
    expect(shownInputNode.value).toBe('10/25/1995');

    // clear the date picker's value programmatically/externally
    const newValue = undefined;

    rerender(
      <DatePicker {...initialProps} value={newValue}>
        {label}
      </DatePicker>
    );

    expect(hiddenInputNode.value).toBe('');
    expect(shownInputNode.value).toBe('');
  });

  it('changing the `disabled` prop to true should call `datePicker.disable()`', () => {
    const disableSpy = jest.spyOn(datePicker, 'disable');

    const { rerender } = render(<DatePicker id={id}>{label}</DatePicker>);

    rerender(
      <DatePicker id={id} disabled>
        {label}
      </DatePicker>
    );

    expect(disableSpy).toHaveBeenCalled();
  });

  it('changing the `disabled` prop to false should call `datePicker.enable()`', () => {
    const enableSpy = jest.spyOn(datePicker, 'enable');

    const { rerender } = render(
      <DatePicker id={id} disabled>
        {label}
      </DatePicker>
    );

    rerender(<DatePicker id={id}>{label}</DatePicker>);

    expect(enableSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(<DatePicker id={id}>{label}</DatePicker>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
