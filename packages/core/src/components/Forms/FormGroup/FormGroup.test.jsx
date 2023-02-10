import React from 'react';
import { render } from '@testing-library/react';

import FormGroup from '.';

describe('Form Group', () => {
  const content = 'Form Group content';

  it('should render correctly', () => {
    const { container } = render(<FormGroup>{content}</FormGroup>);

    expect(container.querySelector('.usa-form-group').innerHTML).toBe(content);
  });

  it('should render a form group with an error', () => {
    const { container } = render(<FormGroup error>{content}</FormGroup>);

    expect(container.querySelector('.usa-form-group--error').innerHTML).toBe(
      content
    );
  });
});
