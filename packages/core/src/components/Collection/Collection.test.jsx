import React from 'react';
import { render } from '@testing-library/react';

import { Collection, CollectionItem } from '.';

describe('Collection', () => {
  const item1 = '1';
  const item2 = '2';
  const item3 = '3';

  const BODY_SELECTOR =
    '.usa-collection > .usa-collection__item > .usa-collection__body';

  it('should render properly', () => {
    const { container } = render(
      <Collection>
        <CollectionItem>{item1}</CollectionItem>
        <CollectionItem>{item2}</CollectionItem>
        <CollectionItem>{item3}</CollectionItem>
      </Collection>
    );

    const collection = container.querySelectorAll(BODY_SELECTOR);

    expect(collection[0].innerHTML).toBe(item1);
    expect(collection[1].innerHTML).toBe(item2);
    expect(collection[2].innerHTML).toBe(item3);
  });

  it('should render the "condensed" variant', () => {
    const { container } = render(
      <Collection condensed>
        <CollectionItem>{item1}</CollectionItem>
        <CollectionItem>{item2}</CollectionItem>
        <CollectionItem>{item3}</CollectionItem>
      </Collection>
    );

    expect(container.querySelector('.usa-collection--condensed')).toBeTruthy();
  });
});
