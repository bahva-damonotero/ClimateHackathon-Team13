import React from 'react';
import { render } from '@testing-library/react';

import Hint from '.';

describe('Hint', () => {
  const body = 'Hint content';

  it('should render correctly', () => {
    const { container } = render(<Hint>{body}</Hint>);

    expect(container.querySelector('.usa-hint').innerHTML).toBe(body);
  });
});
