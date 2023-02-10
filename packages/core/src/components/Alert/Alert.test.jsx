import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Alert from '.';

describe('Alert', () => {
  const heading = 'Alert Heading';
  const body =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.';

  // we use both classes to test the structure
  const HEADING_SELECTOR = '.usa-alert__body > .usa-alert__heading';
  const BODY_SELECTOR = '.usa-alert__body > .usa-alert__text';

  it('should render correctly', () => {
    const { container } = render(
      <Alert heading={heading} type="info">
        {body}
      </Alert>
    );

    expect(container.querySelector(HEADING_SELECTOR).innerHTML).toBe(heading);
    expect(container.querySelector(BODY_SELECTOR).innerHTML).toBe(body);
  });

  // test all alert types
  for (const type of ['error', 'info', 'success', 'warning']) {
    it(`should render "${type}" alerts correctly`, () => {
      const { container } = render(
        <Alert heading={heading} type={type}>
          {body}
        </Alert>
      );

      expect(container.querySelector(`.usa-alert--${type}`)).toBeTruthy();
    });
  }

  it('should call `onClose` when the close button is clicked', () => {
    const onClose = jest.fn();

    const { container } = render(
      <Alert heading={heading} type="info" onClose={onClose}>
        {body}
      </Alert>
    );

    fireEvent.click(container.querySelector('.bah-uswds-alert__close-button'));

    expect(onClose).toHaveBeenCalled();
  });
});
