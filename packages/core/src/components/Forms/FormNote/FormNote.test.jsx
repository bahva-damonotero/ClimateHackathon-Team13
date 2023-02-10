import React from 'react';
import { render } from '@testing-library/react';

import FormNote from '.';

describe('FormNote', () => {
  it('should render correctly', () => {
    const content = 'Form Note content';

    const { container } = render(<FormNote>{content}</FormNote>);

    expect(container.querySelector('.usa-form__note').innerHTML).toBe(content);
  });
});
