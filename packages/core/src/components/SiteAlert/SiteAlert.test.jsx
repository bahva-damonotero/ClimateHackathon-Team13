import React from 'react';
import { render } from '@testing-library/react';

import SiteAlert from '.';

describe('SiteAlert', () => {
  const heading = 'Site Alert Heading';
  const body =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.';

  const HEADING_SELECTOR =
    '.usa-site-alert .usa-alert__body > .usa-alert__heading';
  const BODY_SELECTOR = '.usa-site-alert .usa-alert__body > .usa-alert__text';

  it('should render correctly', () => {
    const { container } = render(
      <SiteAlert heading={heading}>{body}</SiteAlert>
    );

    expect(container.querySelector(HEADING_SELECTOR).innerHTML).toBe(heading);
    expect(container.querySelector(BODY_SELECTOR).innerHTML).toBe(body);
  });

  it('should render the default variant', () => {
    const { container } = render(
      <SiteAlert heading={heading}>{body}</SiteAlert>
    );

    expect(container.querySelector('.usa-site-alert--info')).toBeTruthy();
  });

  it('should render the "emergency" variant', () => {
    const { container } = render(
      <SiteAlert emergency heading={heading}>
        {body}
      </SiteAlert>
    );

    expect(container.querySelector('.usa-site-alert--emergency')).toBeTruthy();
  });

  it('should render the "slim" variant', () => {
    const { container } = render(
      <SiteAlert heading={heading} slim>
        {body}
      </SiteAlert>
    );

    expect(container.querySelector('.usa-site-alert--slim')).toBeTruthy();
  });

  it('should render without a heading', () => {
    const { container } = render(<SiteAlert>{body}</SiteAlert>);

    expect(container.querySelector('.usa-site-alert--no-heading')).toBeTruthy();
  });

  it('should render without an icon', () => {
    const { container } = render(
      <SiteAlert heading={heading} icon={false}>
        {body}
      </SiteAlert>
    );

    expect(container.querySelector('.usa-site-alert--no-icon')).toBeTruthy();
  });
});
