import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import SideNavigation from '.';

describe('SideNavigation', () => {
  const links = [
    {
      href: '#',
      text: 'Parent link'
    },
    {
      current: true,
      href: '#',
      sublist: [
        {
          href: '#',
          text: 'Child link'
        },
        {
          href: '#',
          sublist: [
            {
              href: '#',
              text: 'Grandchild link'
            },
            {
              href: '#',
              text: 'Grandchild link'
            },
            {
              current: true,
              href: '#',
              text: 'Grandchild link'
            }
          ],
          text: 'Child link'
        },
        {
          href: '#',
          text: 'Child link'
        },
        {
          href: '#',
          text: 'Child link'
        },
        {
          href: '#',
          text: 'Child link'
        }
      ],
      text: 'Current page'
    },
    {
      href: '#',
      text: 'Parent link'
    }
  ];

  const jsx = (
    <Router>
      <SideNavigation items={links} />
    </Router>
  );

  it('should render correctly', () => {
    const { container } = render(jsx);

    // should have 3 tiers
    expect(
      container.querySelector(
        '.usa-sidenav .usa-sidenav__item .usa-sidenav__sublist .usa-sidenav__item .usa-sidenav__sublist .usa-sidenav__item'
      )
    ).toBeTruthy();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
