import React from 'react';
import {
  Header,
  HeaderNavigation,
  HeaderSecondaryNavigation,
  HeaderTitle,
  NavigationDropdown,
  NavigationLink,
  Search
} from '@boozallen-uip/uswds-react-core';

export default function ExtendedHeaderWithMegaMenuExample() {
  const links = [
    {
      href: '#',
      text: 'Link 1'
    },
    {
      href: '#',
      text: 'Link 2'
    },
    {
      current: true,
      href: '#',
      text: 'A longer, active link'
    }
  ];
  const groupedLinks = [[...links], [...links], [...links]];

  return (
    <Header id="extended-header-with-mega-menu" extended>
      <HeaderTitle>Project Title</HeaderTitle>

      <HeaderNavigation>
        <NavigationDropdown id="dropdown-one" links={groupedLinks}>
          Section 1
        </NavigationDropdown>

        <NavigationDropdown active id="dropdown-two" links={groupedLinks}>
          Section 2
        </NavigationDropdown>

        <NavigationLink href="#">Simple Link</NavigationLink>
      </HeaderNavigation>

      <HeaderSecondaryNavigation>
        <NavigationLink href="#">Secondary Link</NavigationLink>
      </HeaderSecondaryNavigation>

      <Search onSearch={() => {}} size="small" />
    </Header>
  );
}
