import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import characterCount from '@uswds/uswds/js/usa-character-count';

import CharacterCount from '.';
import { FormGroup, Input } from '..';

describe('CharacterCount', () => {
  const id = 'character-count-test';
  const inputId = 'character-count-test-1';
  const maxLength = 25;

  const jsx = (
    <CharacterCount id={id} target={inputId}>
      <FormGroup>
        <Input
          describedBy={`character-count--${inputId}`}
          id={inputId}
          maxLength={maxLength}
        >
          Text input
        </Input>
      </FormGroup>
    </CharacterCount>
  );

  it('should call `characterCount.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(characterCount, 'on');

    render(jsx);

    expect(onSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
