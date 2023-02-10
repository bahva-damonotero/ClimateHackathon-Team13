import React from 'react';
import { render } from '@testing-library/react';

import { CollectionMeta, CollectionMetaItem } from '..';

describe('CollectionMeta', () => {
  const tag = 'TAG';

  const META_ITEM_SELECTOR =
    '.usa-collection__meta > .usa-collection__meta-item';
  const META_SELECTOR = '.usa-collection__meta';

  it('should render properly', () => {
    const { container } = render(
      <CollectionMeta>
        <CollectionMetaItem>{tag}</CollectionMetaItem>
      </CollectionMeta>
    );

    const meta = container.querySelector(META_SELECTOR);
    const metaItem = container.querySelector(META_ITEM_SELECTOR);

    expect(meta.getAttribute('aria-label')).toBe('More information');
    expect(metaItem.innerHTML).toBe(tag);
  });
});
