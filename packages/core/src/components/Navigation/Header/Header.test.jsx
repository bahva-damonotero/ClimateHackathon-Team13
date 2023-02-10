import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import navigation from '@uswds/uswds/js/usa-header';

import {
  Header,
  HeaderNavigation,
  HeaderSecondaryNavigation,
  HeaderTitle,
  NavigationDropdown,
  NavigationLink
} from '.';
import { Search } from '../..';

describe('Header', () => {
  const headerTitle = 'Title';
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

  it('should render correctly', () => {
    const { container } = render(
      <Router>
        <Header>
          <HeaderTitle>{headerTitle}</HeaderTitle>

          <HeaderNavigation>
            <NavigationDropdown id="dropdown-example" links={links}>
              Dropdown Example
            </NavigationDropdown>

            <NavigationLink href="#">Simple Link</NavigationLink>
          </HeaderNavigation>

          <Search size="small" />
        </Header>
      </Router>
    );

    // should have basic header class
    expect(container.querySelector('.usa-header--basic')).toBeTruthy();

    // should render the title
    expect(
      container.querySelector('.usa-logo > .usa-logo__text > a').innerHTML
    ).toBe(headerTitle);

    // should have primary navigation
    expect(container.querySelector('.usa-nav__primary')).toBeTruthy();

    // should have a search bar
    expect(container.querySelector('.usa-search')).toBeTruthy();
  });

  it('should render the "extended" variant with a mega-menu and secondary navigation', () => {
    const { container } = render(
      <Router>
        <Header extended>
          <HeaderTitle>{headerTitle}</HeaderTitle>

          <HeaderNavigation>
            <NavigationDropdown
              id="dropdown-example"
              links={[[...links], [...links]]}
            >
              Mega-Menu Example
            </NavigationDropdown>

            <NavigationLink href="#">Simple Link</NavigationLink>
          </HeaderNavigation>

          <HeaderSecondaryNavigation>
            <NavigationLink href="#">Secondary Link</NavigationLink>
          </HeaderSecondaryNavigation>

          <Search size="small" />
        </Header>
      </Router>
    );

    // should have extended header class
    expect(container.querySelector('.usa-header--extended')).toBeTruthy();

    // should have a mega-menu
    expect(container.querySelector('.usa-megamenu')).toBeTruthy();

    // should have secondary navigation
    expect(container.querySelector('.usa-nav__secondary-links')).toBeTruthy();
  });

  it('should call `navigation.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(navigation, 'on');

    render(
      <Router>
        <Header>
          <HeaderTitle>{headerTitle}</HeaderTitle>

          <HeaderNavigation>
            <NavigationDropdown id="dropdown-example" links={links}>
              Dropdown Example
            </NavigationDropdown>

            <NavigationLink href="#">Simple Link</NavigationLink>
          </HeaderNavigation>
        </Header>
      </Router>
    );

    expect(onSpy).toHaveBeenCalled();
  });

  it('should throw an error when an invalid component is used in the Header', () => {
    expect(() => {
      render(
        <Header>
          <span>Some content that doesn't belong here.</span>
        </Header>
      );
    }).toThrow("Invalid child component 'undefined' used in Header.");
  });
});
