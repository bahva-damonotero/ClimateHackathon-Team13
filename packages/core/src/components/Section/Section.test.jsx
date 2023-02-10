import React from 'react';
import { render } from '@testing-library/react';

import Section from '.';

describe('Section', () => {
  it('should render correctly', () => {
    const content = 'Section content.';

    const { container } = render(<Section>{content}</Section>);

    expect(container.querySelector('section.usa-section').innerHTML).toBe(
      content
    );
  });
});
