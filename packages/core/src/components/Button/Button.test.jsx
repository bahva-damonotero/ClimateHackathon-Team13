import React from 'react';
import { render } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  const body = 'Button';

  it('should render correctly', () => {
    const { container } = render(<Button>{body}</Button>);
    expect(container.querySelector('.usa-button').innerHTML).toBe(body);
  });

  it('should render the "accent cool" variant', () => {
    const { container } = render(<Button accentCool>{body}</Button>);
    expect(container.querySelector('.usa-button--accent-cool')).toBeTruthy();
  });

  it('should render the "base" variant', () => {
    const { container } = render(<Button base>{body}</Button>);
    expect(container.querySelector('.usa-button--base')).toBeTruthy();
  });

  it('should render the "big" variant', () => {
    const { container } = render(<Button big>{body}</Button>);
    expect(container.querySelector('.usa-button--big')).toBeTruthy();
  });

  it('should render the "inverse" variant', () => {
    const { container } = render(<Button inverse>{body}</Button>);
    expect(container.querySelector('.usa-button--inverse')).toBeTruthy();
  });

  it('should render the "outline" variant', () => {
    const { container } = render(<Button outline>{body}</Button>);
    expect(container.querySelector('.usa-button--outline')).toBeTruthy();
  });

  it('should render the "secondary" variant', () => {
    const { container } = render(<Button secondary>{body}</Button>);
    expect(container.querySelector('.usa-button--secondary')).toBeTruthy();
  });

  it('should render the "unstyled" variant', () => {
    const { container } = render(<Button unstyled>{body}</Button>);
    expect(container.querySelector('.usa-button--unstyled')).toBeTruthy();
  });

  it('should render the button with an anchor tag', () => {
    const { container } = render(
      <Button href="https://www.boozallen.com">{body}</Button>
    );
    expect(container.querySelector('a.usa-button')).toBeTruthy();
  });
});
