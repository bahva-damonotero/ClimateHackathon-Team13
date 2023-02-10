import React from 'react';
import {
  Header,
  HeaderNavigation,
  HeaderTitle,
  NavigationDropdown
} from '@boozallen-uip/uswds-react-core';

export default function BasicHeaderWithoutSearchExample() {
  const links = [
    { href: '#', text: 'Link 1' },
    { href: '#', text: 'Link 2' },
    { current: true, href: '#', text: 'A longer, active link' }
  ];

  return (
    <Header id="basic-header-without-search">
      <HeaderTitle>Project Title</HeaderTitle>

      <HeaderNavigation>
        <NavigationDropdown id="dropdown-one" links={links}>
          Section 1
        </NavigationDropdown>

        <NavigationDropdown active id="dropdown-two" links={links}>
          Section 2
        </NavigationDropdown>
      </HeaderNavigation>
    </Header>
  );
}
