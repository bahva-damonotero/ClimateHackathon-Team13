import React from 'react';
import { render } from '@testing-library/react';
import accordion from '@uswds/uswds/js/usa-accordion';

import AccordionGroup from '.';
import { AccordionItem } from '..';

describe('AccordionGroup', () => {
  const id1 = 'accordion-example-1';
  const id2 = 'accordion-example-2';
  const heading1 = 'Heading 1';
  const heading2 = 'Heading 2';
  const body1 = 'Content 1';
  const body2 = 'Content 2';

  const jsx = (
    <AccordionGroup>
      <AccordionItem heading={heading1} id={id1}>
        {body1}
      </AccordionItem>

      <AccordionItem heading={heading2} id={id2}>
        {body2}
      </AccordionItem>
    </AccordionGroup>
  );

  // we use both classes to test the structure of the heading
  const HEADING_SELECTOR = '.usa-accordion__heading > .usa-accordion__button';

  it('should render correctly', () => {
    const { container } = render(jsx);

    const headings = container.querySelectorAll(HEADING_SELECTOR);
    expect(headings.length).toBe(2);

    expect(headings[0].innerHTML).toBe(heading1);
    expect(headings[1].innerHTML).toBe(heading2);

    expect(container.querySelector(`#${id1}`).innerHTML).toBe(body1);
    expect(container.querySelector(`#${id2}`).innerHTML).toBe(body2);
  });

  it('should render the "bordered" variant', () => {
    const { container } = render(
      <AccordionGroup border>
        <AccordionItem heading={heading1} id={id1}>
          {body1}
        </AccordionItem>

        <AccordionItem heading={heading2} id={id2}>
          {body2}
        </AccordionItem>
      </AccordionGroup>
    );

    expect(container.querySelector('.usa-accordion--bordered')).toBeTruthy();
  });

  it('should call `accordion.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(accordion, 'on');

    render(jsx);

    expect(onSpy).toHaveBeenCalled();
  });
});
