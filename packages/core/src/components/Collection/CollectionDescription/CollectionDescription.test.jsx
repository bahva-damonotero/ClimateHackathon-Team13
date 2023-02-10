import React from 'react';
import { render } from '@testing-library/react';

import { CollectionDescription } from '..';

describe('CollectionDescription', () => {
  const description = 'Sample collection description';

  const DESCRIPTION_SELECTOR = '.usa-collection__description';

  it('should render properly', () => {
    const { container } = render(
      <CollectionDescription>{description}</CollectionDescription>
    );

    const collection = container.querySelector(DESCRIPTION_SELECTOR);

    expect(collection.innerHTML).toBe(description);
  });
});
