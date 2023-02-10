import React from 'react';
import {
  GridContainer,
  Header,
  HeaderNavigation,
  HeaderSecondaryNavigation,
  HeaderTitle,
  NavigationDropdown,
  NavigationLink,
  Search,
  SkipNav
} from '@boozallen-uip/uswds-react-core';

export default function SkipNavExample() {
  const links = [
    { href: '#', text: 'Link 1' },
    { href: '#', text: 'Link 2' }
  ];

  return (
    <>
      <SkipNav href="#main-content" />

      <Header>
        <HeaderTitle>Project</HeaderTitle>
        <HeaderNavigation>
          <NavigationDropdown active id="dropdown-1" links={links}>
            Section 1
          </NavigationDropdown>

          <NavigationDropdown id="dropdown-2" links={links}>
            Section 2
          </NavigationDropdown>

          <NavigationLink href="#">Simple Link</NavigationLink>
        </HeaderNavigation>

        <HeaderSecondaryNavigation>
          <NavigationLink href="#">Secondary Link</NavigationLink>
        </HeaderSecondaryNavigation>

        <Search onSearch={() => {}} size="small" />
      </Header>

      <main id="main-content">
        <GridContainer>Main Content</GridContainer>
      </main>
    </>
  );
}
