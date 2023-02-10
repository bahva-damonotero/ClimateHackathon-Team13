import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Input from '.';

describe('Input', () => {
  const id = 'input-example';
  const label = 'Input label';

  it('should render "success" variant', () => {
    const { container } = render(
      <Input id={id} readOnly success>
        {label}
      </Input>
    );

    expect(container.querySelector(`#${id}.usa-input--success`)).toBeTruthy();
  });

  it('should render with an error', () => {
    const { container } = render(
      <Input error="Invalid characters used" id={id} readOnly>
        {label}
      </Input>
    );

    expect(container.querySelector(`#${id}.usa-input--error`)).toBeTruthy();
  });

  it('should match snapshot (input)', () => {
    const tree = renderer
      .create(
        <Input id={id} readOnly>
          {label}
        </Input>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot (textarea)', () => {
    const tree = renderer
      .create(
        <Input id={id} readOnly type="textarea">
          {label}
        </Input>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
