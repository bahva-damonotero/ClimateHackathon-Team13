import React from 'react';
import { render } from '@testing-library/react';

import Form from '.';

describe('Form', () => {
  const content = 'Form content';

  it('should render correctly', () => {
    const { container } = render(<Form>{content}</Form>);

    expect(container.querySelector('.usa-form').innerHTML).toBe(content);
  });

  it('should render the "large" form variant', () => {
    const { container } = render(<Form large>{content}</Form>);

    expect(container.querySelector('.usa-form--large').innerHTML).toBe(content);
  });
});
