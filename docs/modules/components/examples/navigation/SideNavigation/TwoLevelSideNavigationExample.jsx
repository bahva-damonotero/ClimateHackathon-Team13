import React from 'react';
import {
  GridCol,
  GridRow,
  SideNavigation
} from '@boozallen-uip/uswds-react-core';

export default function TwoLevelSideNavigationExample() {
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
          current: true,
          href: '#',
          text: 'Child link'
        }
      ],
      text: 'Curent page'
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
