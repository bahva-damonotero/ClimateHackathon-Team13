/* eslint-disable react/prop-types */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SkipNav from '.';

export default {
  title: 'Navigation/SkipNav',
  component: SkipNav,
  argTypes: {
    href: '#main-content'
  }
};

const Template = ({ href }) => (
  <MemoryRouter>
    <SkipNav href={href} />
  </MemoryRouter>
);

const defaultArgs = {
  href: '#main-content'
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};
