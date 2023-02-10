/* eslint-disable react/prop-types */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';

import {
  Header,
  HeaderNavigation,
  HeaderSecondaryNavigation,
  HeaderTitle,
  NavigationDropdown,
  NavigationLink
} from '.';
import { Search } from '../..';

export default {
  title: 'Navigation/Header',
  component: Header,
  subcomponents: {
    HeaderNavigation,
    HeaderSecondaryNavigation,
    HeaderTitle,
    NavigationDropdown,
    NavigationLink,
    Search
  },
  argTypes: {
    headerTitle: {
      name: '<HeaderTitle> children',
      description: 'Header logo and/or title content to display',
      type: { required: true },
      table: {
        type: { summary: 'node' }
      }
    },
    links: {
      table: { disable: true }
    },
    search: {
      name: '<Search />',
      description: 'Should there be a search box in the header?'
    },
    children: { type: null }
  }
};

const onSearch = action('onSearch');

const Template = ({ headerTitle, links, search, ...args }) => (
  <MemoryRouter>
    <Header {...args}>
      <HeaderTitle>{headerTitle}</HeaderTitle>

      <HeaderNavigation>
        <NavigationDropdown id="dropdown-one" links={links}>
          Section 1
        </NavigationDropdown>

        <NavigationDropdown active id="dropdown-two" links={links}>
          Section 2
        </NavigationDropdown>

        <NavigationLink href="#">Simple Link</NavigationLink>
      </HeaderNavigation>

      {args.extended && (
        <HeaderSecondaryNavigation>
          <NavigationLink href="#">Secondary Link</NavigationLink>
        </HeaderSecondaryNavigation>
      )}

      {search && <Search size="small" onSearch={onSearch} />}
    </Header>
  </MemoryRouter>
);

const defaultArgs = {
  headerTitle: 'Title',
  links: [
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
  ],
  search: true
};

const groupedLinks = [
  [...defaultArgs.links],
  [...defaultArgs.links],
  [...defaultArgs.links]
];

export const basic = Template.bind({});
basic.args = {
  ...defaultArgs
};

export const basicWithoutSearch = Template.bind({});
basicWithoutSearch.args = {
  ...defaultArgs,
  search: false
};

export const basicWithMegaMenu = Template.bind({});
basicWithMegaMenu.storyName = 'Basic with Mega-Menu';
basicWithMegaMenu.args = {
  ...defaultArgs,
  links: groupedLinks
};

export const extended = Template.bind({});
extended.args = {
  ...defaultArgs,
  extended: true
};

export const extendedWithoutSearch = Template.bind({});
extendedWithoutSearch.args = {
  ...defaultArgs,
  extended: true,
  search: false
};

export const extendedWithMegaMenu = Template.bind({});
extendedWithMegaMenu.storyName = 'Extended with Mega-Menu';
extendedWithMegaMenu.args = {
  ...defaultArgs,
  extended: true,
  links: groupedLinks
};
