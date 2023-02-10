/* eslint-disable import/first */
jest.mock('lodash.isequal');

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import isEqual from 'lodash.isequal';

import Dropdown from '.';

describe('Dropdown', () => {
  const id = 'dropdown-example';
  const label = 'Dropdown Label';

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

  const SELECT_SELECTOR = `#${id}.usa-select`;
  const LABEL_SELECTOR = '.usa-label';

  it('should render correctly', () => {
    const { container } = render(
      <Dropdown id={id} options={basicOptions}>
        {label}
      </Dropdown>
    );

    expect(container.querySelector(SELECT_SELECTOR)).toBeTruthy();

    const labelNode = container.querySelector(LABEL_SELECTOR);
    expect(labelNode.innerHTML).toBe(label);
    expect(labelNode.getAttribute('for')).toBe(id);
  });

  it('should call `onChange` when the value changes', () => {
    const onChange = jest.fn();

    const { container } = render(
      <Dropdown
        comparator={comparator}
        id={id}
        onChange={onChange}
        optionRenderer={optionRenderer}
        options={options}
        value={options[1]}
      >
        {label}
      </Dropdown>
    );

    const selectNode = container.querySelector(SELECT_SELECTOR);

    fireEvent.change(selectNode, {
      target: {
        value: 0
      }
    });

    expect(onChange).toHaveBeenCalledWith(
      new CustomEvent('change', {
        detail: {
          name: id,
          value: options[0]
        }
      })
    );
  });

  it('should use `lodash.isEqual` when `comparator` is not provided', () => {
    // render the dropdown with no value
    const initialProps = {
      id,
      onChange: () => {},
      optionRenderer,
      options
    };

    const { rerender } = render(<Dropdown {...initialProps}>{label}</Dropdown>);

    // update the dropdown's value programmatically/externally
    const newValue = options[0];

    rerender(
      <Dropdown {...initialProps} value={newValue}>
        {label}
      </Dropdown>
    );

    expect(isEqual).toHaveBeenCalled();
  });

  it('should handle falsey values based on given options', () => {
    const initialProps = {
      id,
      onChange: () => {},
      options: ['string', 0, false]
    };

    const { container, rerender } = render(
      <Dropdown {...initialProps}>{label}</Dropdown>
    );

    expect(container.querySelector(SELECT_SELECTOR).value).toBe('');

    rerender(
      <Dropdown {...initialProps} value={0}>
        {label}
      </Dropdown>
    );

    expect(container.querySelector(SELECT_SELECTOR).value).toBe('1');

    rerender(
      <Dropdown {...initialProps} value={false}>
        {label}
      </Dropdown>
    );

    expect(container.querySelector(SELECT_SELECTOR).value).toBe('2');
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Dropdown id={id} options={basicOptions}>
          {label}
        </Dropdown>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
