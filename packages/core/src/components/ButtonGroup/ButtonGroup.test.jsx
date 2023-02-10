import React from 'react';
import { render } from '@testing-library/react';

import ButtonGroup from '.';
import { Button, ButtonGroupItem } from '..';

describe('ButtonGroup', () => {
  const buttons = (
    <>
      <ButtonGroupItem>
        <Button>Button 1</Button>
      </ButtonGroupItem>

      <ButtonGroupItem>
        <Button>Button 2</Button>
      </ButtonGroupItem>

      <ButtonGroupItem>
        <Button>Button 3</Button>
      </ButtonGroupItem>
    </>
  );

  it('should render correctly', () => {
    const { container } = render(<ButtonGroup>{buttons}</ButtonGroup>);
    expect(container.querySelector('.usa-button-group')).toBeTruthy();
  });

  it('should render the segmented variant', () => {
    const { container } = render(
      <ButtonGroup segmented>{buttons}</ButtonGroup>
    );
    expect(
      container.querySelector('.usa-button-group--segmented')
    ).toBeTruthy();
  });
});
