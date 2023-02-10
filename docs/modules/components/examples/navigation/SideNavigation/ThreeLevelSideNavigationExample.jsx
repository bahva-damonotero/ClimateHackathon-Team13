import React from 'react';
import {
  GridCol,
  GridRow,
  SideNavigation
} from '@boozallen-uip/uswds-react-core';

export default function ThreeLevelSideNavigationExample() {
  const items = [
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

  return (
    <GridRow gaps>
      <GridCol width={4}>
        <SideNavigation items={items} />
      </GridCol>

      <GridCol width="fill">Page content goes here.</GridCol>
    </GridRow>
  );
}
