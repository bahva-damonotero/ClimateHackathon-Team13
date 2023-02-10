import React from 'react';
import { render } from '@testing-library/react';

import { CollectionHeading } from '..';

describe('CollectionHeading', () => {
  const heading = 'Sample Collection Heading';

  const HEADING_SELECTOR = '.usa-collection__heading';

  it('should render properly', () => {
    const { container } = render(
      <CollectionHeading>{heading}</CollectionHeading>
    );

    const collection = container.querySelector(HEADING_SELECTOR);

    expect(collection.innerHTML).toBe(heading);
  });
});
