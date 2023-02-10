import React from 'react';
import { render } from '@testing-library/react';

import Legend from '.';

describe('Legend', () => {
  const label = 'Label';

  it('should render correctly', () => {
    const { container } = render(<Legend>{label}</Legend>);

    expect(container.querySelector('.usa-legend').innerHTML).toBe(label);
  });

  it('should render with an error', () => {
    const { container } = render(<Legend error>{label}</Legend>);

    expect(container.querySelector('.usa-label--error').innerHTML).toBe(label);
  });

  it('should be invisible but readable by screen readers', () => {
    const { container } = render(<Legend screenReaderOnly>{label}</Legend>);

    expect(container.querySelector('.usa-sr-only').innerHTML).toBe(label);
  });
});
