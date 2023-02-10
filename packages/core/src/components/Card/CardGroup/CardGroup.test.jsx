import React from 'react';
import { render } from '@testing-library/react';

import CardGroup from '.';

describe('CardGroup', () => {
  it('should render correctly', () => {
    const content =
      "This should be Card components but we don't need to use them for testing.";

    const { container } = render(<CardGroup>{content}</CardGroup>);

    expect(container.querySelector('.usa-card-group').innerHTML).toBe(content);
  });
});
