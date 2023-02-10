import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import RadioGroup from '.';
import { Legend, Radio } from '..';

describe('RadioGroup', () => {
  const id = 'radio-group-example';
  const label = 'Gender';

  const genders = [
    { key: 'M', value: 'Male' },
    { key: 'F', value: 'Female' },
    { key: 'O', value: 'Other' },
    { disabled: true, key: 'P', value: 'Prefer not to say' }
  ];

  const renderOptions = () => {
    return genders.map((option) => (
      <Radio disabled={option.disabled} key={option.key} value={option}>
        {option.value}
      </Radio>
    ));
  };

  const jsx = (
    <RadioGroup id={id} readOnly>
      <Legend screenReaderOnly>{label}</Legend>

      {renderOptions()}
    </RadioGroup>
  );

  it('should render correctly', () => {
    const { container } = render(jsx);

    expect(container.querySelector('.usa-fieldset .usa-legend').innerHTML).toBe(
      label
    );
  });

  it('should throw an error if a Legend is not provided', () => {
    expect(() => {
      render(
        <RadioGroup id={id} readOnly>
          {renderOptions()}
        </RadioGroup>
      );
    }).toThrow('A Legend is required inside of a RadioGroup.');
  });

  it('should throw an error if no Radio components are provided', () => {
    expect(() => {
      render(
        <RadioGroup id={id} readOnly>
          <Legend screenReaderOnly>{label}</Legend>
        </RadioGroup>
      );
    }).toThrow('At least one Radio must be present inside of a RadioGroup.');
  });

  it('should throw an error when an invalid component is used in the RadioGroup', () => {
    expect(() => {
      render(
        <RadioGroup id={id} readOnly>
          <Legend screenReaderOnly>{label}</Legend>

          {renderOptions()}

          <span>Some content that doesn't belong here.</span>
        </RadioGroup>
      );
    }).toThrow("Invalid child component 'undefined' used in RadioGroup.");
  });

  it('should call `onChange` when the value changes', () => {
    const onChange = jest.fn();

    const { container } = render(
      <RadioGroup id={id} onChange={onChange}>
        <Legend screenReaderOnly>{label}</Legend>

        {renderOptions()}
      </RadioGroup>
    );

    fireEvent.click(container.querySelectorAll('.usa-radio__input')[0]);

    expect(onChange).toHaveBeenCalledWith(
      new CustomEvent('change', {
        detail: {
          name: id,
          value: genders[0]
        }
      })
    );
  });

  it('should handle falsey values based on given options', () => {
    const onChange = jest.fn();

    const options = [
      { key: 'true', value: true },
      { key: 'false', value: false },
      { key: 'string', value: 'string' },
      { key: 'undefined', value: undefined },
      { key: 'zero', value: 0 }
    ];

    const renderRadioOptions = () => {
      return options.map((option) => (
        <Radio disabled={option.disabled} key={option.key} value={option}>
          {option.value}
        </Radio>
      ));
    };

    const { container } = render(
      <RadioGroup id={id} onChange={onChange}>
        <Legend screenReaderOnly>{label}</Legend>

        {renderRadioOptions()}
      </RadioGroup>
    );

    fireEvent.click(container.querySelectorAll('.usa-radio__input')[0]);

    expect(onChange).toHaveBeenCalledWith(
      new CustomEvent('change', {
        detail: {
          name: id,
          value: options[0]
        }
      })
    );

    fireEvent.click(container.querySelectorAll('.usa-radio__input')[1]);

    expect(onChange).toHaveBeenCalledWith(
      new CustomEvent('change', {
        detail: {
          name: id,
          value: options[1]
        }
      })
    );

    fireEvent.click(container.querySelectorAll('.usa-radio__input')[3]);

    expect(onChange).toHaveBeenCalledWith(
      new CustomEvent('change', {
        detail: {
          name: id,
          value: options[3]
        }
      })
    );

    fireEvent.click(container.querySelectorAll('.usa-radio__input')[4]);

    expect(onChange).toHaveBeenCalledWith(
      new CustomEvent('change', {
        detail: {
          name: id,
          value: options[4]
        }
      })
    );
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
