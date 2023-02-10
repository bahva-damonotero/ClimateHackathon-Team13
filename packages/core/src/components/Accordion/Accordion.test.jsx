import React from 'react';
import { render } from '@testing-library/react';
import accordion from '@uswds/uswds/js/usa-accordion';

import Accordion from '.';

describe('Accordion', () => {
  const id = 'accordion-example';
  const heading = 'Heading';
  const body = Date.now();

  const jsx = (
    <Accordion id={id} heading={heading}>
      {body}
    </Accordion>
  );

  // we use both classes to test the structure of the heading
  const HEADING_SELECTOR = '.usa-accordion__heading > .usa-accordion__button';

  it('should render correctly', () => {
    const { container } = render(jsx);

    expect(container.querySelector(HEADING_SELECTOR).innerHTML).toBe(heading);
    expect(container.querySelector(`#${id}`).innerHTML).toBe(body.toString());
  });

  it('should call `accordion.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(accordion, 'on');

    render(jsx);

    expect(onSpy).toHaveBeenCalled();
  });
});
