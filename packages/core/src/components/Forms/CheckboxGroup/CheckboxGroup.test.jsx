import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CheckboxGroup from '.';
import { Checkbox, Legend } from '..';

describe('CheckboxGroup', () => {
  const id = 'checkbox-group-example';
  const label = 'Checkbox Group Label';

  const jsx = (
    <CheckboxGroup id={id}>
      <Legend>{label}</Legend>

      <Checkbox readOnly>Choice One</Checkbox>

      <Checkbox readOnly>Choice Two</Checkbox>

      <Checkbox disabled>Choice Three</Checkbox>
    </CheckboxGroup>
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
        <CheckboxGroup id={id}>
          <Checkbox readOnly>Choice One</Checkbox>

          <Checkbox readOnly>Choice Two</Checkbox>

          <Checkbox disabled>Choice Three</Checkbox>
        </CheckboxGroup>
      );
    }).toThrow('A Legend is required inside of a CheckboxGroup.');
  });

  it('should throw an error if no Checkbox components are provided', () => {
    expect(() => {
      render(
        <CheckboxGroup id={id}>
          <Legend>{label}</Legend>
        </CheckboxGroup>
      );
    }).toThrow(
      'At least one Checkbox must be present inside of a CheckboxGroup.'
    );
  });

  it('should throw an error when an invalid component is used in the CheckboxGroup', () => {
    expect(() => {
      render(
        <CheckboxGroup id={id}>
          <Legend>{label}</Legend>

          <Checkbox readOnly>Choice One</Checkbox>

          <Checkbox readOnly>Choice Two</Checkbox>

          <Checkbox disabled>Choice Three</Checkbox>

          <span>Some content that doesn't belong here.</span>
        </CheckboxGroup>
      );
    }).toThrow("Invalid child component 'undefined' used in CheckboxGroup.");
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
