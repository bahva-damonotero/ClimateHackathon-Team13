import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Breadcrumb from '.';

describe('Breadcrumb', () => {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'Federal Contracting', href: '/federalcontracting' },
    { text: 'Contract assistance programs', href: '/contract' },
    {
      text: 'Women-owned small business federal contracting program',
      href: '/women-owned'
    }
  ];

  const LIST_SELECTOR = '.usa-breadcrumb__list';
  const ITEMS_SELECTOR =
    '.usa-breadcrumb .usa-breadcrumb__list .usa-breadcrumb__list-item';
  const LINK_SELECTOR = '.usa-breadcrumb__link';
  const META_SELECTOR = 'meta';

  it('should render correctly without RDFa metadata', () => {
    const { container } = render(
      <Router>
        <Breadcrumb links={links} />
      </Router>
    );

    // ensure list node does not contain metadata
    const list = container.querySelector(LIST_SELECTOR);
    expect(list.getAttribute('vocab')).toBe(null);
    expect(list.getAttribute('typeof')).toBe(null);

    // get breadcrumb items
    const items = container.querySelectorAll(ITEMS_SELECTOR);
    expect(items.length).toBe(links.length);

    // test items
    for (const [index, item] of items.entries()) {
      const anchor = item.querySelector(LINK_SELECTOR);

      // the last breadcrumb item should not be a link
      if (index < items.length - 1) {
        expect(anchor).toBeTruthy();
        expect(anchor.getAttribute('href')).toBe(links[index].href);
      } else {
        expect(anchor).toBeFalsy();
      }

      const span = (anchor || item).querySelector('span');
      expect(span.innerHTML).toBe(links[index].text);

      // should not have metadata
      expect(item.getAttribute('property')).toBe(null);
      expect(item.getAttribute('typeof')).toBe(null);

      if (anchor) {
        expect(anchor.getAttribute('property')).toBe(null);
        expect(anchor.getAttribute('typeof')).toBe(null);
      }

      expect(span.getAttribute('property')).toBe(null);

      expect(item.querySelector(META_SELECTOR)).toBeFalsy();
    }
  });

  it('should render with RDFa metadata', () => {
    const { container } = render(
      <Router>
        <Breadcrumb links={links} meta />
      </Router>
    );

    // list node should contain metadata
    const list = container.querySelector(LIST_SELECTOR);
    expect(list.getAttribute('vocab')).toBe('http://schema.org/');
    expect(list.getAttribute('typeof')).toBe('BreadcrumbList');

    // breadcrumb items should contain metadata
    const items = container.querySelectorAll(ITEMS_SELECTOR);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      expect(item.getAttribute('property')).toBe('itemListElement');
      expect(item.getAttribute('typeof')).toBe('ListItem');

      const anchor = item.querySelector(LINK_SELECTOR);
      if (anchor) {
        expect(anchor.getAttribute('property')).toBe('item');
        expect(anchor.getAttribute('typeof')).toBe('WebPage');
      }

      const span = (anchor || item).querySelector('span');
      expect(span.getAttribute('property')).toBe('name');

      const meta = item.querySelector(META_SELECTOR);
      expect(meta.getAttribute('content')).toBe((i + 1).toString());
    }
  });

  it('should render wrapped', () => {
    const { container } = render(
      <Router>
        <Breadcrumb links={links} wrap />
      </Router>
    );

    expect(container.querySelector('.usa-breadcrumb--wrap')).toBeTruthy();
  });
});
