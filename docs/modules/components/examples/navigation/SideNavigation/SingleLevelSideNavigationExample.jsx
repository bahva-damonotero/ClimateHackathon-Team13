import React from 'react';
import {
  GridCol,
  GridRow,
  SideNavigation
} from '@boozallen-uip/uswds-react-core';

export default function SingleLevelSideNavigationExample() {
  const items = [
    {
      current: true,
      href: '#',
      text: 'Current page'
    },
    {
      href: '#',
      text: 'Parent link'
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
