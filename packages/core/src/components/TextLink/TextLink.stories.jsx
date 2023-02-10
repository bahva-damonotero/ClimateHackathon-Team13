import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import TextLink from '.';

export default {
  title: 'TextLink',
  component: TextLink
};

const Template = (args) => (
  <MemoryRouter>
    <TextLink {...args} />
  </MemoryRouter>
);

const defaultArgs = {
  children: 'Link',
  href: 'https://designsystem.digital.gov/'
};

export const internal = Template.bind({});
internal.args = {
  ...defaultArgs,
  href: '#'
};

export const external = Template.bind({});
external.args = {
  ...defaultArgs,
  external: true
};

export const openInANewTab = Template.bind({});
openInANewTab.args = {
  ...defaultArgs,
  external: true,
  target: '_blank'
};
