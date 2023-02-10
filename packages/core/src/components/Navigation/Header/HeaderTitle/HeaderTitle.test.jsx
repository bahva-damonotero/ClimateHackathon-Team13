import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import HeaderTitle from './HeaderTitle';

describe('HeaderTitle', () => {
  const headerTitle = 'Title';

  it('should have a custom aria-label', () => {
    const label = 'Booz Allen Home';

    const { container } = render(
      <Router>
        <HeaderTitle ariaLabel={label}>{headerTitle}</HeaderTitle>
      </Router>
    );

    expect(
      container
        .querySelector('.usa-logo > .usa-logo__text > a')
        .getAttribute('aria-label')
    ).toBe(label);
  });
});
