import React from 'react';
import { render } from '@testing-library/react';

import Hero from './Hero';

describe('Hero', () => {
  const heading = 'Heading';
  const body = 'Hero content';

  it('should render correctly', () => {
    const { container } = render(<Hero heading={heading}>{body}</Hero>);

    const heroContentNode = container.querySelector(
      '.usa-hero > .grid-container > .usa-hero__callout'
    );
    const headingNode = heroContentNode.querySelector('.usa-hero__heading');

    expect(headingNode.innerHTML).toBe(heading);
    expect(heroContentNode.innerHTML).toBe(headingNode.outerHTML + body);
  });

  it('should render a hero with a different background', () => {
    const bgPath = 'image.jpeg';

    const { container } = render(
      <Hero background={bgPath} heading={heading}>
        {body}
      </Hero>
    );

    expect(container.querySelector('.usa-hero').style.backgroundImage).toBe(
      `url(${bgPath})`
    );
  });

  it('should render a hero without a heading', () => {
    const { container } = render(<Hero>{body}</Hero>);

    expect(container.querySelector('.usa-hero__callout').innerHTML).toBe(body);
  });
});
