import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import SideNavigation from '.';
import { GridCol, GridRow } from '../../Grid';

export default {
  title: 'Navigation/SideNavigation',
  component: SideNavigation,
  argTypes: {
    items: {
      type: null,
      table: {
        type: {
          summary:
            '{ current: boolean, href: string, sublist: this[], text: string }[]'
        }
      }
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

const Template = (args) => (
  <MemoryRouter>
    <GridRow>
      <GridCol width={4}>
        <SideNavigation {...args} />
      </GridCol>
    </GridRow>
  </MemoryRouter>
);

export const singleLevel = Template.bind({});
singleLevel.args = {
  items: [
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
  ]
};

export const twoLevels = Template.bind({});
twoLevels.args = {
  items: [
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
  ]
};

export const threeLevels = Template.bind({});
threeLevels.args = {
  items: [
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
  ]
};
