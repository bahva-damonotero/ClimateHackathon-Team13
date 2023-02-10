import React from 'react';
import globeIcon from '@uswds/uswds/img/usa-icons/public.svg';
import { render } from '@testing-library/react';

import { CollectionImage } from '..';

describe('CollectionImage', () => {
  const IMAGE_SELECTOR = '.usa-collection__img';

  it('should render properly', () => {
    const { container } = render(<CollectionImage src={globeIcon} />);

    const image = container.querySelector(IMAGE_SELECTOR);

    expect(image.getAttribute('src')).toBe(globeIcon);
  });
});
