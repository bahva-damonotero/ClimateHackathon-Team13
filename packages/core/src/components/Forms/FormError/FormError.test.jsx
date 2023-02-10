import React from 'react';
import { render } from '@testing-library/react';

import FormError from '.';

describe('FormError', () => {
  const ERROR_SELECTOR = '.usa-error-message';

  it('should render correctly', () => {
    const error = 'Error with form field.';

    const { container } = render(<FormError error={error} />);

    expect(container.querySelector(ERROR_SELECTOR).innerHTML).toBe(error);
  });

  it('should not render if no `error` prop is supplied', () => {
    const { container } = render(<FormError />);

    expect(container.querySelector(ERROR_SELECTOR)).toBeFalsy();
  });
});
