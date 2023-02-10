import React from 'react';

import { MemoryRouter as Router } from 'react-router-dom';
import Breadcrumb from '.';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    links: {
      type: null,
      table: {
        type: { summary: '{ href: string, text: string }[]' }
      }
    }
  }
};

const Template = (args) => (
  <Router>
    <Breadcrumb {...args} />
  </Router>
);

const defaultArgs = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Federal Contracting', href: '/federalcontracting' },
    { text: 'Contract assistance programs', href: '/contract' },
    {
      text: 'Women-owned small business federal contracting program',
      href: '/women-owned'
    }
  ]
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const wrapTitles = Template.bind({});
wrapTitles.args = {
  ...defaultArgs,
  wrap: true
};

export const meta = Template.bind({});
meta.storyName = 'RDFa Metadata';
meta.args = {
  ...defaultArgs,
  meta: true
};
