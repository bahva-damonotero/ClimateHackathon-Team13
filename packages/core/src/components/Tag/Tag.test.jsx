import React from 'react';
import { render } from '@testing-library/react';

import Tag from '.';

describe('Tag', () => {
  const content = 'Tag content';

  it('should render correctly', () => {
    const { container } = render(<Tag>{content}</Tag>);

    expect(container.querySelector('.usa-tag').innerHTML).toBe(content);
  });

  it('should render the "large" variant', () => {
    const { container } = render(<Tag large>{content}</Tag>);

    expect(container.querySelector('.usa-tag--big')).toBeTruthy();
  });
});
