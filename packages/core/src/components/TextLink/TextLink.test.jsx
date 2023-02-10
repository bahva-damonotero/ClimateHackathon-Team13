import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import TextLink from '.';

describe('TextLink', () => {
  const content = 'Click me';

  it('should render an internal link', () => {
    const link = '/some-page';

    const { container } = render(
      <Router>
        <TextLink href={link}>{content}</TextLink>
      </Router>
    );

    const anchorNode = container.querySelector('.usa-link');

    expect(anchorNode.innerHTML).toBe(content);
    expect(anchorNode.getAttribute('href')).toBe(link);
  });

  it('should render an external link', () => {
    const link = 'https://designsystem.digital.gov/';

    const { container } = render(
      <Router>
        <TextLink external href={link}>
          {content}
        </TextLink>
      </Router>
    );

    const anchorNode = container.querySelector('.usa-link--external');

    expect(anchorNode.innerHTML).toBe(content);
    expect(anchorNode.getAttribute('href')).toBe(link);
  });
});
