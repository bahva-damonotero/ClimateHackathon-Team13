import React from 'react';
import { render } from '@testing-library/react';

import Label from '.';

describe('Label', () => {
  const label = 'Label';
  const target = 'example-input-id';

  it('should render correctly', () => {
    const { container } = render(<Label target={target}>{label}</Label>);

    expect(container.querySelector('.usa-label').innerHTML).toBe(label);
  });

  it('should render with an error', () => {
    const { container } = render(
      <Label error="Error with form input" target={target}>
        {label}
      </Label>
    );

    expect(container.querySelector('.usa-label--error').innerHTML).toBe(label);
  });
});
