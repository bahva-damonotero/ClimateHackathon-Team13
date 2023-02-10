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

export default function BasicHeaderExample() {
  const links = [
    { href: '#', text: 'Link 1' },
    { href: '#', text: 'Link 2' },
    { current: true, href: '#', text: 'A longer, active link' }
  ];

  return (
    <Header id="basic-header">
      <HeaderTitle>Project Title</HeaderTitle>

      <HeaderNavigation>
        <NavigationDropdown id="dropdown-one" links={links}>
          Section 1
        </NavigationDropdown>

        <NavigationDropdown active id="dropdown-two" links={links}>
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
