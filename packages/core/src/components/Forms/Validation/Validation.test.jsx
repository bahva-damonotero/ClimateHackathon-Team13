import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import validation from '@uswds/uswds/js/usa-validation';

import Validation from '.';
import { Input } from '..';

describe('Validation', () => {
  const validationId = 'validation-example';

  const jsx = (
    <Validation
      heading="Validation test"
      id={validationId}
      requirements={[
        {
          text: 'Use at least 8 characters',
          validator: 'length-validation'
        }
      ]}
    >
      <Input
        id="validation-input"
        validationId={validationId}
        validators={[
          {
            name: 'length-validation',
            regex: '^.{8,}$'
          }
        ]}
      >
        Input
      </Input>
    </Validation>
  );

  it('should call `validation.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(validation, 'on');

    render(jsx);

    expect(onSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
