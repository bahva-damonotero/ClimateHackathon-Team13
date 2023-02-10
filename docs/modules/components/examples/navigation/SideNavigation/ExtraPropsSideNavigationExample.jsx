import React from 'react';
import {
  GridCol,
  GridRow,
  SideNavigation
} from '@boozallen-uip/uswds-react-core';

export default function ExtraPropsSideNavigationExample() {
  const items = [
    {
      current: true,
      href: '#',
      text: 'Current page'
    },
    {
      href: 'https://boozallen.com',
      text: 'Parent link',
      target: '_blank',
      rel: 'nofollow noreferrer'
    },
    {
      href: '#',
      text: 'Parent link'
    }
  ];

  return (
    <GridRow gaps id="sidenavigation-extra-props-example">
      <GridCol width={4}>
        <SideNavigation items={items} />
      </GridCol>

      <GridCol width="fill">Page content goes here.</GridCol>
    </GridRow>
  );
}
