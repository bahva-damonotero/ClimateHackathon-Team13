import React from 'react';
import { render } from '@testing-library/react';

import { CollectionMeta, CollectionMetaItem } from '..';

describe('CollectionMetaItem', () => {
  const tag = 'TAG';

  it('should render properly', () => {
    const { container } = render(
      <CollectionMeta>
        <CollectionMetaItem tag>{tag}</CollectionMetaItem>
      </CollectionMeta>
    );

    const metaItem = container.querySelector(
      '.usa-collection__meta-item.usa-tag'
    );

    expect(metaItem.innerHTML).toBe(tag);
  });

  it('should render the "newTag" variant', () => {
    const { container } = render(
      <CollectionMeta>
        <CollectionMetaItem newTag>{tag}</CollectionMetaItem>
      </CollectionMeta>
    );

    const metaItem = container.querySelector(
      '.usa-collection__meta-item.usa-tag.usa-tag--new'
    );

    expect(metaItem.innerHTML).toBe(tag);
  });

  it('should render both the "newTag" and "tag" variants', () => {
    const { container } = render(
      <CollectionMeta>
        <CollectionMetaItem newTag tag>
          {tag}
        </CollectionMetaItem>
      </CollectionMeta>
    );

    const metaItem = container.querySelector(
      '.usa-collection__meta-item.usa-tag.usa-tag--new.usa-tag'
    );

    expect(metaItem.innerHTML).toBe(tag);
  });
});
