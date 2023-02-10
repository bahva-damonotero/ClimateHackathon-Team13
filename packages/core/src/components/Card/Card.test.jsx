import React from 'react';
import { render } from '@testing-library/react';

import { Card, CardBody, CardFooter, CardHeader, CardMedia } from '.';

describe('Card', () => {
  const heading = 'Heading';
  const mediaSrc = 'image.jpeg';
  const mediaDesc = 'Description of the image.';
  const body = 'Body content';
  const footer = 'Footer content';

  function jsx(
    { cardProps, headingProps, mediaProps } = {
      cardProps: {},
      headingProps: {},
      mediaProps: {}
    }
  ) {
    return (
      <Card {...cardProps}>
        <CardHeader {...headingProps}>{heading}</CardHeader>
        <CardMedia src={mediaSrc} {...mediaProps}>
          {mediaDesc}
        </CardMedia>
        <CardBody>{body}</CardBody>
        <CardFooter>{footer}</CardFooter>
      </Card>
    );
  }

  const HEADING_SELECTOR =
    '.usa-card > .usa-card__container > .usa-card__header > .usa-card__heading';
  const MEDIA_SELECTOR =
    '.usa-card > .usa-card__container > .usa-card__media > .usa-card__img > img';
  const BODY_SELECTOR = '.usa-card > .usa-card__container > .usa-card__body';
  const FOOTER_SELECTOR =
    '.usa-card > .usa-card__container > .usa-card__footer';

  it('renders correctly', () => {
    const { container } = render(jsx());

    expect(container.querySelector(HEADING_SELECTOR).innerHTML).toBe(heading);
    expect(container.querySelector(BODY_SELECTOR).innerHTML).toBe(body);
    expect(container.querySelector(FOOTER_SELECTOR).innerHTML).toBe(footer);

    const media = container.querySelector(MEDIA_SELECTOR);
    expect(media.getAttribute('src')).toBe(mediaSrc);
    expect(media.getAttribute('alt')).toBe(mediaDesc);
  });

  it('renders the flag variant correctly', () => {
    const { container } = render(jsx({ cardProps: { flag: true } }));

    expect(container.querySelector('.usa-card--flag')).toBeTruthy();
  });

  it('renders the media right flag variant correctly', () => {
    const { container } = render(jsx({ cardProps: { flag: 'right' } }));

    expect(container.querySelector('.usa-card--media-right')).toBeTruthy();
  });

  it('renders the header first variant correctly', () => {
    const { container } = render(jsx({ cardProps: { headerFirst: true } }));

    expect(container.querySelector('.usa-card--header-first')).toBeTruthy();
  });

  for (let i = 2; i <= 4; i++) {
    it(`renders the card with a heading level of ${i} correctly`, () => {
      const { container } = render(jsx({ headingProps: { level: i } }));

      expect(container.querySelector(`h${i}`).innerHTML).toBe(heading);
    });
  }

  it('renders a card with exdent media correctly', () => {
    const { container } = render(jsx({ mediaProps: { exdent: true } }));

    expect(container.querySelector('.usa-card__media--exdent')).toBeTruthy();
  });

  it('renders a card with inset media correctly', () => {
    const { container } = render(jsx({ mediaProps: { inset: true } }));

    expect(container.querySelector('.usa-card__media--inset')).toBeTruthy();
  });
});
