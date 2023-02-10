/* eslint-disable import/first */
jest.mock('lodash.isequal');

import React from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import comboBox from '@uswds/uswds/js/usa-combo-box';
import isEqual from 'lodash.isequal';

import ComboBox from '.';

describe('ComboBox', () => {
  const id = 'combobox-example';
  const label = 'Select your desired option';

  const basicOptions = ['John Doe', 'Jane Doe', 'Bob Bobson'];

  const options = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Bob', lastName: 'Bobson' }
  ];

  const optionRenderer = ({ firstName, lastName }) =>
    `${firstName} ${lastName}`;

  const comparator = (value, option) =>
    value && option
      ? value.firstName === option.firstName &&
        value.lastName === option.lastName
      : false;

  const INPUT_SELECTOR = `#${id}.usa-combo-box__input`;
  const SELECT_SELECTOR = `.usa-combo-box__select`;
  const LABEL_SELECTOR = `#${id}-label.usa-label`;
  const PRISTINE_SELECTOR = '.usa-combo-box--pristine';

  it('should render correctly', () => {
    const { container } = render(
      <ComboBox id={id} options={basicOptions}>
        {label}
      </ComboBox>
    );

    expect(container.querySelector(INPUT_SELECTOR)).toBeTruthy();

    const labelNode = container.querySelector(LABEL_SELECTOR);
    expect(labelNode.innerHTML).toBe(label);
    expect(labelNode.getAttribute('for')).toBe(id);
  });

  it('should call `comboBox.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(comboBox, 'on');

    render(
      <ComboBox id={id} options={basicOptions}>
        {label}
      </ComboBox>
    );

    expect(onSpy).toHaveBeenCalled();
  });

  it('should call `onChange` when the value changes', () => {
    const onChange = jest.fn();

    const { container } = render(
      <ComboBox
        comparator={comparator}
        id={id}
        onChange={onChange}
        optionRenderer={optionRenderer}
        options={options}
        value={options[1]}
      >
        {label}
      </ComboBox>
    );

    const selectNode = container.querySelector(SELECT_SELECTOR);

    fireEvent(
      selectNode,
      createEvent(
        'change',
        selectNode,
        {
          detail: {
            value: 0
          }
        },
        { EventType: 'CustomEvent' }
      )
    );

    expect(onChange).toHaveBeenCalledWith(
      new CustomEvent('change', {
        detail: {
          name: id,
          value: options[0]
        }
      })
    );
  });

  it('should not call `onChange` when the value stays the same', () => {
    const onChange = jest.fn();

    const { container } = render(
      <ComboBox
        comparator={comparator}
        id={id}
        onChange={onChange}
        optionRenderer={optionRenderer}
        options={options}
        value={options[1]}
      >
        {label}
      </ComboBox>
    );

    const selectNode = container.querySelector(SELECT_SELECTOR);

    fireEvent(
      selectNode,
      createEvent(
        'change',
        selectNode,
        {
          detail: {
            value: 1
          }
        },
        { EventType: 'CustomEvent' }
      )
    );

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should be able to update the value programmatically', () => {
    // render the combo box with no value
    const initialProps = {
      comparator,
      id,
      onChange: () => {},
      optionRenderer,
      options
    };

    const { container, rerender } = render(
      <ComboBox {...initialProps}>{label}</ComboBox>
    );

    expect(container.querySelector(PRISTINE_SELECTOR)).toBeFalsy();

    const inputNode = container.querySelector(INPUT_SELECTOR);
    const selectNode = container.querySelector(SELECT_SELECTOR);

    expect(inputNode.value).toBe('');
    expect(selectNode.value).toBe('');

    // update the combo box's value programmatically/externally
    const newValueIndex = 0;
    const newValue = options[newValueIndex];

    rerender(
      <ComboBox {...initialProps} value={newValue}>
        {label}
      </ComboBox>
    );

    expect(inputNode.value).toBe(optionRenderer(newValue));
    expect(selectNode.value).toBe(`${newValueIndex}`);

    expect(container.querySelector(PRISTINE_SELECTOR)).toBeTruthy();
  });

  it('should be able to clear the value programmatically', () => {
    // render the combo box with a value
    const initialValueIndex = 0;
    const initialValue = options[initialValueIndex];

    const initialProps = {
      comparator,
      id,
      onChange: () => {},
      optionRenderer,
      options,
      value: initialValue
    };

    const { container, rerender } = render(
      <ComboBox {...initialProps}>{label}</ComboBox>
    );

    expect(container.querySelector(PRISTINE_SELECTOR)).toBeTruthy();

    const inputNode = container.querySelector(INPUT_SELECTOR);
    const selectNode = container.querySelector(SELECT_SELECTOR);

    expect(inputNode.value).toBe(optionRenderer(initialValue));
    expect(selectNode.value).toBe(`${initialValueIndex}`);

    // clear the combo box's value programmatically/externally
    rerender(
      <ComboBox {...initialProps} value={undefined}>
        {label}
      </ComboBox>
    );

    expect(inputNode.value).toBe('');
    expect(selectNode.value).toBe('');

    expect(container.querySelector(PRISTINE_SELECTOR)).toBeFalsy();
  });

  it('should use `lodash.isEqual` when `comparator` is not provided', () => {
    // render the combo box with no value
    const initialProps = {
      id,
      onChange: () => {},
      optionRenderer,
      options
    };

    const { rerender } = render(<ComboBox {...initialProps}>{label}</ComboBox>);

    // update the combo box's value programmatically/externally
    const newValue = options[0];

    rerender(
      <ComboBox {...initialProps} value={newValue}>
        {label}
      </ComboBox>
    );

    expect(isEqual).toHaveBeenCalled();
  });

  it('changing the `disabled` prop to true should call `comboBox.disable()', () => {
    const disableSpy = jest.spyOn(comboBox, 'disable');

    // render the combo box enabled
    const initialProps = {
      id,
      onChange: () => {},
      options: basicOptions
    };

    const { rerender } = render(<ComboBox {...initialProps}>{label}</ComboBox>);

    // disable the combo box
    rerender(
      <ComboBox {...initialProps} disabled>
        {label}
      </ComboBox>
    );

    expect(disableSpy).toHaveBeenCalled();
  });

  it('changing the `disabled` prop to false should call `comboBox.enable()', () => {
    const enableSpy = jest.spyOn(comboBox, 'enable');

    // render the combo box disabled
    const sharedProps = {
      id,
      onChange: () => {},
      options: basicOptions
    };

    const { rerender } = render(
      <ComboBox {...sharedProps} disabled>
        {label}
      </ComboBox>
    );

    // enable the combo box
    rerender(<ComboBox {...sharedProps}>{label}</ComboBox>);

    expect(enableSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <ComboBox id={id} options={basicOptions}>
          {label}
        </ComboBox>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
